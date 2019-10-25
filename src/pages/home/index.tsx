import React from 'react';
import './index.less';

import SearchBar from './searchbar';
import Swiper from './swiper';
import ProductItem from '../../compand/product_item';
import Scroll from '../../plugins/scroll';

interface iProps {
    pullToRefresh: any;
}

interface iState {
    refreshing: boolean;
    list: number[];
}

export default class extends React.Component<iProps, iState> {
    constructor(props: any) {
        super(props);
        this.state = {
            refreshing: false,
            list: [1, 2, 3, 4]
        };
    }
    loadTxt = { activate: '松开加载', deactivate: '上拉加载更多', release: '加载中', finish: '...' };
    render() {
        return (
            <div>
                <SearchBar />
                <Swiper />
                <div id="products">
                    {this.state.list.map((item, index) => (
                        <ProductItem key={index} />
                    ))}
                </div>
            </div>
        );
    }
    onRefresh = () => {
        console.log('up');
    };
}
