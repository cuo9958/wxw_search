import React from 'react';
import { Link } from 'react-router-dom';

export default class extends React.PureComponent {
    render() {
        return (
            <Link to={'/detail?id=' + 1}>
                <div className="product_item flex-left">
                    <div className="img">
                        <img className="img" src="http://img5.daling.com/data/files/zin/public/common/2019/10/17/14/31/45/AIKGUER000002239101.JPG_375x375.jpg" alt="" />
                    </div>
                    <div className="content">
                        <div className="dot">天然亲肤无刺激</div>
                        <div className="title">[金纺]金纺 纯净温和 衣物护理剂2.5L*2瓶(5L)</div>
                        <div className="labs">
                            <span className="lab">特卖</span>
                        </div>
                        <div className="foot">
                            <div>¥19.9</div>
                            <div className="btn">查看</div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}
