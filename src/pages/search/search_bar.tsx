/**
 * 搜索框
 */
import React from 'react';

export default class extends React.PureComponent {
    render() {
        return (
            <div id="searchbox" className="flex-center searchbox">
                <div className="box">
                    <img className="icon" src="/images/icon-search.png" alt="" />
                    <input placeholder="休闲日本樱花库 抢购价13元" type="text" />
                </div>
                <div className="search_btn">搜索</div>
            </div>
        );
    }
}
