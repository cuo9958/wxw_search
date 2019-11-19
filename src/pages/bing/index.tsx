import React, { Fragment } from 'react';
import './index.less';
import SearchBar from './search_bar';
import ProductItem from '../../compand/product_item';
import Scroll from '../../plugins/scroll';
import request from '../../services/request';

interface iTest {
    list: number[];
    refreshing: boolean;
    isEnd: boolean;
}

export default class extends React.Component<iTest, iTest> {
    constructor(props: any) {
        super(props);
        this.state = {
            list: [1, 2, 3, 4, 5],
            refreshing: false,
            isEnd: false
        };
    }
    limit: number = 1;
    render() {
        return (
            <Fragment>
                <SearchBar onChange={this.onChange} onClick={this.onClick} />
                <Scroll onRefresh={this.onRefresh} refreshing={this.state.refreshing}>
                    <div className="searchbox"></div>
                    <div id="search_products">
                        {this.state.list.map((item, index) => (
                            <ProductItem key={index} />
                        ))}
                    </div>
                    <div className="scroll_end">{this.state.isEnd ? '没有更多了' : '加载中请稍后'}</div>
                </Scroll>
            </Fragment>
        );
    }
    componentDidMount() {
        this.onRefresh();
    }
    txt: string = '';
    onChange = (txt: string) => {
        this.txt = txt;
    };
    onClick = () => {
        this.limit = 1;
        this.onRefresh(true);
    };
    onRefresh = async (bl?: boolean) => {
        try {
            const data = await request.get('/search', {
                limit: this.limit,
                key: this.txt
            });
            this.limit++;
            let isEnd = this.state.isEnd;
            if (data.length < 10) isEnd = true;
            if (bl) {
                this.setState({
                    list: data,
                    isEnd
                });
            } else {
                this.setState({
                    list: this.state.list.concat(data),
                    isEnd
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
}
