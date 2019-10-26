import React from 'react';

interface iScrollProps {
    onRefresh(): void;
    refreshing: boolean;
}

interface iScrollState {}

export default class extends React.Component<iScrollProps, iScrollState> {
    render() {
        return <div className="scroll_container">{this.props.children}</div>;
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    onScroll = (e: any) => {
        if (document.body.scrollHeight - window.innerHeight - 50 < window.scrollY) {
            if (!this.props.refreshing) {
                this.props.onRefresh();
            }
        }
    };
}
