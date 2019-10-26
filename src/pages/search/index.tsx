import React, { Fragment } from 'react';
import './index.less';
import SearchBar from './search_bar';
import ProductItem from '../../compand/product_item';
import Scroll from '../../plugins/scroll';

interface iTest {
    list: number[];
    refreshing: boolean;
}

export default class extends React.Component<iTest, iTest> {
    constructor(props: any) {
        super(props);
        this.state = {
            list: [1, 2, 3, 4, 5],
            refreshing: false
        };
    }

    render() {
        return (
            <Fragment>
                <SearchBar />
                <Scroll onRefresh={this.onRefresh} refreshing={this.state.refreshing}>
                    <div className="searchbox"></div>
                    <div id="search_products">
                        {this.state.list.map((item, index) => (
                            <ProductItem key={index} />
                        ))}
                    </div>
                </Scroll>
            </Fragment>
        );
    }

    onRefresh = () => {};
}
