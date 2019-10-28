import React, { Fragment } from 'react';
import './index.less';
import { Link } from 'react-router-dom';

interface iProps {
    location: {
        pathname: string;
    };
}
interface iState {}

function getHome(pathname: string) {
    if (pathname === '/')
        return (
            <Fragment>
                <img src="https://static.daling.com/assets/xc_touch/static/img/shop-active.c326f0b.png" alt="" />
                <div className="txt active">首页</div>
            </Fragment>
        );
    return (
        <Link to="/">
            <img src="https://static.daling.com/assets/xc_touch/static/img/shop.b4d77f3.png" alt="" />
            <div className="txt">首页</div>
        </Link>
    );
}

function getList(pathname: string) {
    if (pathname === '/record')
        return (
            <Fragment>
                <img src="https://static.daling.com/assets/xc_touch/static/img/classification-active.c2a022f.png" alt="" />
                <div className="txt active">历史</div>
            </Fragment>
        );
    return (
        <Link to="/record">
            <img src="https://static.daling.com/assets/xc_touch/static/img/classification.f23fc7f.png" alt="" />
            <div className="txt">历史</div>
        </Link>
    );
}

function getMe(pathname: string) {
    if (pathname === '/me')
        return (
            <Fragment>
                <img src="http://wxw.bxiaob.top/tmp/me2.png" alt="" />
                <div className="txt active">我的</div>
            </Fragment>
        );
    return (
        <Link to="/me">
            <img src="http://wxw.bxiaob.top/tmp/me1.png" alt="" />
            <div className="txt">我的</div>
        </Link>
    );
}

export default class Layout extends React.Component<iProps, iState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Fragment>
                {this.props.children}
                {['/', '/record', '/me'].includes(this.props.location.pathname) && (
                    <Fragment>
                        <div id="nav_base"></div>
                        <div id="nav" className="flex-center">
                            <div className="unit">{getHome(this.props.location.pathname)}</div>
                            <div className="unit">{getList(this.props.location.pathname)}</div>
                            <div className="unit">{getMe(this.props.location.pathname)}</div>
                        </div>
                    </Fragment>
                )}
            </Fragment>
        );
    }
}
