import React from 'react';
import './index.less';
import { inject } from 'mobx-react';
import utils from '../../services/utils';
import { Link } from 'react-router-dom';

interface iProps {
    Talk: iTalk;
}

interface iState {
    list: any[];
}
interface iAttr {
    attributes: any;
}
interface baseItem {
    name: string;
    id: string;
    members: string[];
    lastMessage: string;
    lastMessageAt: Date;
    unreadMessagesCount: number;
}
interface iConvertion extends baseItem {
    _attributes: iAttr;
    updatedAt: Date;
}

interface iItem extends baseItem {
    attrs: any;
    time: string;
}
/**
 * 测试页
 */
@inject((models: any) => ({
    Talk: models.Talk
}))
export default class extends React.Component<iProps, iState> {
    constructor(props: any) {
        super(props);
        this.state = {
            list: []
        };
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.list.map((item: iItem, index) => (
                        <Link key={index} to={'/talks?id=' + item.id}>
                            <div className="record_item flex-left">
                                <div className="headimg">
                                    <img src={item.attrs.img} alt="" />
                                </div>
                                <div className="info">
                                    <div className="title">{item.name}</div>
                                    <div className="msg">{item.lastMessage || '暂无消息'}</div>
                                </div>
                                <div className="time">{item.time}</div>
                            </div>
                        </Link>
                    ))}
                </div>
                测试页
                <button onClick={this.test}>测试</button>
            </div>
        );
    }

    componentDidMount() {
        this.getList();
    }
    getList = async () => {
        const data = await this.props.Talk.getList();
        console.log(data);
        const list: iItem[] = [];
        data.forEach((item: iConvertion) => {
            list.push({
                id: item.id,
                name: item.name,
                members: item.members,
                lastMessage: item.lastMessage,
                lastMessageAt: item.lastMessageAt,
                unreadMessagesCount: item.unreadMessagesCount,
                attrs: item._attributes.attributes,
                time: utils.DateFormart(item.lastMessageAt || item.updatedAt, 'hh:mm')
            });
        });
        this.setState({
            list
        });
    };
    test = async () => {
        const data = await this.props.Talk.create('Test');
        console.log(data);
    };
}
