import React from 'react';
import PullUp from 'rmc-pull-to-refresh';

interface iProps {
    pullToRefresh: any;
}

interface iState {}

class Container extends React.Component<iProps, iState> {
    componentDidMount() {
        if (this.props.pullToRefresh) {
            this.forceUpdate();
        }
    }
    lv: any = null;
    render() {
        let child = this.props.children;
        if (this.props.pullToRefresh) {
            child = React.cloneElement(
                this.props.pullToRefresh,
                {
                    getScrollContainer: () => this.lv
                },
                child
            );
        }
        return (
            <div ref={el => (this.lv = el)} style={{ height: window.screen.height, overflow: 'auto' }}>
                {child}
            </div>
        );
    }
}

interface iScrollProps {
    onRefresh(): void;
    refreshing: boolean;
}

interface iScrollState {}
export default class extends React.Component<iScrollProps, iScrollState> {
    static defaultProps = {
        onRefresh: () => {},
        refreshing: false
    };

    loadTxt = { activate: '松开加载', deactivate: '上拉加载更多', release: '加载中', finish: '...' };
    
    render() {
        return <Container pullToRefresh={<PullUp direction="up" refreshing={this.props.refreshing} onRefresh={this.props.onRefresh} indicator={this.loadTxt} />}>{this.props.children}</Container>;
    }
}
