import { Realtime, IMClient, TextMessage } from 'leancloud-realtime';

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
            const client = await realtime.createIMClient('Tom');
            this.client = client;
            console.log(client);
        } catch (error) {}
    }

    talkTo(message: string) {
        // conversation
        //     .send(new TextMessage('Jerry，起床了！'))
        //     .then(function(message: string) {
        //         console.log('Tom & Jerry', '发送成功！');
        //     })
        //     .catch(console.error);
    }
    /**
     * 创建一个对话
     * @param uid
     * @param title
     */
    async create(uid: string, title = '') {
        if (this.client == null) return;
        try {
            const conversation = await this.client.createConversation({
                members: [uid],
                name: title,
                attributes: {
                    img: 'test',
                    tit: 'tit'
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
}

export default new Talk();
