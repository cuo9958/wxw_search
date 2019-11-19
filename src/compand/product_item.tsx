import React from 'react';
import { Link } from 'react-router-dom';

interface iGood {
    image: string;
    title: string;
    price: string;
    sku: string;
    id: number;
}

interface iProps {
    item?: iGood;
}

export default class extends React.PureComponent<iProps> {
    render() {
        const item = this.props.item;
        if (!item) return null;
        return (
            <Link to={'/detail?id=' + item.id}>
                <div className="product_item flex-left">
                    <div className="img">
                        <img className="img" src={item.image} alt="" />
                    </div>
                    <div className="content">
                        <div className="dot">{item.title}</div>
                        {/* <div className="title">{item.title}</div> */}
                        {/* <div className="labs">
                            <span className="lab">特卖</span>
                        </div> */}
                        <div className="foot">
                            <div>¥{item.price}</div>
                            <div className="btn">查看</div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}
