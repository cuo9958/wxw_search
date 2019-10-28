import React from 'react';
import './index.less';
import { Link } from 'react-router-dom';
import Toast from 'cogo-toast';

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
}

export default class extends React.Component<any, iDetailState> {
    constructor(props: any) {
        super(props);
        this.state = {
            showTxt: false,
            txt: ''
        };
    }

    render() {
        return (
            <div id="product_detail">
                <div className="detail_img">
                    <img src="http://img9.daling.com/data/files/zin/2019/02/23/22/26/FA163E0BD2F9J2NM21V212JQU2C.jpg" alt="" />
                </div>
                <div className="info">
                    <div className="dot">手感舒适耐用</div>
                    <div className="title">[得力]安格耐特比赛专用篮球(通用)</div>
                    <div className="price">
                        <span className="m">¥</span>77.0<del>¥80.5</del>
                    </div>
                </div>
                <div className="concant">
                    <Item label="送至" txt="北京市朝阳区住邦2000" />
                    <Item label="运费" txt="包邮" />
                    <Item label="库存" txt="124件" />
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
                    <div className="content">
                        <img src="http://img2.daling.com/data/files/zin/2019/02/23/22/27/1418774884DEJ2NM23FPQIBKE1C.jpg" alt="" />
                        <img src="http://img0.daling.com/data/files/zin/2019/02/23/22/27/14187746A583J2NM24HLIHJ1HLC.jpg" alt="" />
                    </div>
                </div>
                <div className="detail_foot"></div>
                <div className="foot flex-left">
                    <Link to="/">
                        <div className="back">
                            <img src="https://static.daling.com/assets/xc_touch/static/img/shop.b4d77f3.png" alt="" />
                        </div>
                    </Link>
                    <div onClick={this.open} className="talk unit">
                        留 言
                    </div>
                    <div className="list unit">查 看</div>
                </div>
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
