import { Realtime, IMClient, TextMessage, Event } from 'leancloud-realtime';

class Talk implements iTalk {
    client: IMClient | null = null;

    async init(uid: string) {
        const realtime = new Realtime({
            appId: 'HJegfut3f1fvzyDsqNCbNvlo-gzGzoHsz',
            appKey: 'jvF357qQyv8NWawtv7rTJd8l'
            // server: 'https://hjegfut3.lc-cn-n1-shared.com'
            // plugins: [TypedMessagesPlugin] // 注册富媒体消息插件
        });
        // Tom 用自己的名字作为 clientId 来登录即时通讯服务
        try {
            const client = await realtime.createIMClient(uid);
            this.client = client;
            console.log(client);
            // 当前用户被添加至某个对话
            client.on(Event.INVITED, this._onJoin);

            // 当前用户收到了某一条消息，可以通过响应 Event.MESSAGE 这一事件来处理。
            client.on(Event.MESSAGE, this._onMessage);
        } catch (error) {}
    }
    /**
     * 被加入群聊
     */
    _onJoin = (payload: any, conversation: any) => {
        console.log(payload.invitedBy, conversation.id);
    };
    /**
     * 消息通知
     */
    _onMessage = (message: any, conversation: any) => {
        console.log('收到新消息：' + message.text, conversation);
        if (conversation.id === this._emterMsg.id) {
            this._emterMsg.fn && this._emterMsg.fn(message);
        }
    };
    _emterMsg = {
        id: '',
        fn: (msg: any) => {}
    };
    onMessage(id: string, fn: any) {
        this._emterMsg.id = id;
        this._emterMsg.fn = fn;
    }

    async talkTo(id: string, message: string) {
        const qun = await this._getConversation(id);
        if (!qun) return;
        try {
            qun.send(new TextMessage(message));
        } catch (error) {
            console.log(error);
        }
    }
    /**
     * 获取聊天对象
     * @param id
     */
    _getConversation(id: string) {
        if (this.client == null) return;
        return this.client.getConversation(id);
    }
    /**
     * 创建一个对话
     * @param uid
     * @param title
     */
    async create(uid: string, id: number, title = '') {
        if (this.client == null) return;
        try {
            const conversation = await this.client.createConversation({
                members: [uid],
                name: title,
                attributes: {
                    img: 'http://img5.daling.com/data/files/zin/public/common/2019/10/17/14/31/45/AIKGUER000002239101.JPG_375x375.jpg',
                    tit: '测试产品',
                    uid,
                    id
                }, //自定义参数
                unique: true
            });
            return conversation.id;
        } catch (error) {
            console.log(error);
        }
        return;
    }
    /**
     * 查询对话列表
     */
    async getList(pageIndex = 0) {
        const pageSize = 20;
        if (this.client == null) return;
        try {
            const query = this.client.getQuery();
            query.skip(pageIndex * pageSize);
            query.limit(pageSize);
            const list = await query.find();
            return list;
        } catch (error) {
            console.log(error);
        }
        return [];
    }
    /**
     * 获取消息历史记录
     * @param id
     */
    async getMsgs(id: string) {
        const qun = await this._getConversation(id);
        if (!qun) return;
        const list = await qun.queryMessages({
            limit: 20,
            type: TextMessage.TYPE
        });
        return list;
    }
}

export default new Talk();
