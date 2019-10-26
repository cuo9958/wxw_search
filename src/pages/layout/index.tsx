import React, { Fragment } from 'react';
import './index.less';

interface iProps {
    location: {
        pathname: string;
    };
}
interface iState {}

function getHome(pathname: string) {
    if (pathname === '/') return <img src="https://static.daling.com/assets/xc_touch/static/img/shop-active.c326f0b.png" alt="" />;
    return <img src="https://static.daling.com/assets/xc_touch/static/img/shop.b4d77f3.png" alt="" />;
}

function getList(pathname: string) {
    if (pathname === '/') return <img src="https://static.daling.com/assets/xc_touch/static/img/classification-active.c2a022f.png" alt="" />;
    return <img src="https://static.daling.com/assets/xc_touch/static/img/classification.f23fc7f.png" alt="" />;
}

function getMe(pathname: string) {
    if (pathname === '/') return <img src="http://wxw.bxiaob.top/tmp/me2.png" alt="" />;
    return <img src="http://wxw.bxiaob.top/tmp/me1.png" alt="" />;
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
                {['/'].includes(this.props.location.pathname) && (
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
