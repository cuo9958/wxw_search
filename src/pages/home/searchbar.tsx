/**
 * 搜索框
 */
import React from 'react';
import { Link } from 'react-router-dom';

export default class extends React.PureComponent {
    render() {
        return (
            <div id="searchbar" className="flex-center">
                <Link to="/search">
                    <div className="box">
                        <img className="icon" src="/images/icon-search.png" alt="" />
                        <span>休闲日本樱花库 抢购价13元</span>
                    </div>
                </Link>
            </div>
        );
    }
}
