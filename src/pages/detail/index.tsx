import React from 'react';
import './index.less';
import { Link } from 'react-router-dom';
import Toast from 'cogo-toast';
import request from '../../services/request';
import utils from '../../services/utils';

interface iItemProps {
    label: string;
    txt: string;
}

class Item extends React.PureComponent<iItemProps> {
    render() {
        return (
            <div className="label_item">
                <label className="label_left">{this.props.label}</label>
                <span className="label_right">{this.props.txt}</span>
            </div>
        );
    }
}

interface iDetailState {
    showTxt: boolean;
    txt: string;
    model: any;
}
interface iParams {
    sku?: string;
    id?: number;
}
export default class extends React.Component<iReactRoute, iDetailState> {
    constructor(props: iReactRoute) {
        super(props);
        this.state = {
            showTxt: false,
            txt: '',
            model: {}
        };

        this.params = utils.parseParams(props.location.search).query;
    }
    params: iParams = {};
    render() {
        return (
            <div id="product_detail">
                <div className="detail_img">
                    <img src={this.state.model.image} alt="" />
                </div>
                <div className="info">
                    <div className="dot">{this.state.model.title}</div>
                    {/* <div className="title">[得力]安格耐特比赛专用篮球(通用)</div> */}
                    <div className="price">
                        <span className="m">¥</span>
                        {this.state.model.price}/{this.state.model.unit}
                        {/* <del>¥80.5</del> */}
                    </div>
                </div>
                <div className="concant">
                    {this.state.model.place && <Item label="产地" txt={this.state.model.place} />}
                    {this.state.model.express && <Item label="快递信息" txt={this.state.model.express} />}
                    {this.state.model.spec && <Item label="规格" txt={this.state.model.spec} />}
                    {this.state.model.ship_area && <Item label="发货区域" txt={this.state.model.ship_area} />}
                    {this.state.model.after_sale && <Item label="售后说明" txt={this.state.model.after_sale} />}
                    {this.state.model.pack && <Item label="包装" txt={this.state.model.pack} />}
                    <div className="tips flex-center">
                        <div className="unit">
                            <i className="icon-check"></i>正品保证
                        </div>
                        <div className="unit">
                            <i className="icon-check"></i>7天无理由退货
                        </div>
                        <div className="unit">
                            <i className="icon-check"></i>极速发货
                        </div>
                    </div>
                </div>
                <div className="detail_info">
                    <div className="title">图文详情</div>
                    <div className="content" dangerouslySetInnerHTML={{ __html: this.state.model.txts }}></div>
                </div>
                <div className="detail_foot"></div>
                {/* <div className="foot flex-left">
                    <Link to="/">
                        <div className="back">
                            <img src="https://static.daling.com/assets/xc_touch/static/img/shop.b4d77f3.png" alt="" />
                        </div>
                    </Link>
                    <div onClick={this.open} className="talk unit">
                        留 言
                    </div>
                    <div className="list unit">查 看</div>
                </div> */}
                {this.state.showTxt && (
                    <div className="talk_to flex-left">
                        <div className="unit">
                            <textarea onChange={this.inputTxt}></textarea>
                        </div>
                        <div className="enter unit-1-4">
                            <button onClick={this.pullTalk}>Enter</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
    componentDidMount() {
        this.getDetail();
    }
    async getDetail() {
        if (!this.params.id) return;
        try {
            const data = await request.get('/goods/' + this.params.id);
            this.setState({ model: data });
        } catch (error) {
            console.log(error);
        }
    }
    inputTxt = (e: any) => {
        this.setState({ txt: e.target.value });
    };
    open = () => {
        this.setState({ showTxt: true });
    };
    pullTalk = () => {
        this.setState({ showTxt: false });
        console.log(this.state.txt);
        Toast.success('留言成功');
    };
}
