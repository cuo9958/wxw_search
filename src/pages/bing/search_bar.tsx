/**
 * 搜索框
 */
import React from 'react';

interface iProps {
    txt: string;
    onChange(txt: string): void;
    onClick(): void;
}

export default class extends React.PureComponent<iProps> {
    static defaultProps = {
        txt: '',
        onChange: () => {},
        onClick: () => {}
    };

    render() {
        return (
            <div id="bingbox" className="flex-center searchbox">
                <div className="box">
                    <img className="icon" src="/images/icon-search.png" alt="" />
                    <input onChange={e => this.props.onChange(e.target.value)} placeholder="休闲日本樱花库 抢购价13元" type="text" />
                </div>
                <div onClick={e => this.props.onClick()} className="search_btn">
                    搜索
                </div>
            </div>
        );
    }
}
