import React from 'react';
import './index.less';
import Talk from '../../models/talk';
import QueryString from 'query-string';
import Utils from '../../services/utils';
import { inject } from 'mobx-react';

interface iState {
    txt: string;
    list: iInfo[];
}

interface iInfo {
    from: string;
    text: string;
    type: number;
    time: string;
}

function RenderInfo(props: any) {
    const item = props.item;
    const uid = props.uid;

    if (uid === item.from) {
        return (
            <div className="talks_item isme">
                <div className="title flex-bottom">
                    <div className="name">我</div>
                    <div className="time">{item.time}</div>
                </div>
                <div className="msg">{item.text}</div>
            </div>
        );
    }
    return (
        <div className="talks_item">
            <div className="title flex-bottom">
                <div className="name">{item.from}</div>
                <div className="time">{item.time}</div>
            </div>
            <div className="msg">{item.text}</div>
        </div>
    );
}

/**
 * 测试页
 */
@inject((models: any) => ({
    uid: models.User.uid
}))
export default class extends React.Component<any, iState> {
    constructor(props: any) {
        super(props);
        this.state = {
            txt: '',
            list: []
        };
        this.query = QueryString.parse(this.props.location.search);
    }
    query: any;
    render() {
        return (
            <div>
                <div className="talks_list">
                    {this.state.list.map((item, index) => (
                        <RenderInfo key={index} item={item} uid={this.props.uid} />
                    ))}
                </div>
                <div className="talk_foot flex-left">
                    <textarea className="txt unit" onChange={this.inputTxt}></textarea>
                    <button onClick={this.enter} className="enter">
                        发送
                    </button>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.getList();
    }

    async getList() {
        const data: any = await Talk.getMsgs(this.query.id);
        console.log(data);
        if (!data) return;
        const list: iInfo[] = [];
        data.forEach((item: any) => {
            list.push({
                from: item.from,
                text: item.text,
                type: item.type,
                time: Utils.DateFormart(item.updatedAt)
            });
        });
        this.setState({ list });
        console.log(list);
    }

    inputTxt = (e: any) => {
        this.setState({ txt: e.target.value });
    };

    enter = () => {
        console.log(this.state.txt);
        Talk.talkTo(this.query.id, this.state.txt);

        this.setState({ txt: '' });
    };
}
