import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Layout from '../pages/layout/index';
import Home from '../pages/home/index';
import Search from '../pages/search/index';
import Detail from '../pages/detail/index';
import Record from '../pages/record/index';
import Me from '../pages/me/index';
import Talks from '../pages/talks/index';
import Bing from '../pages/bing/index';
import Test from '../pages/test';

const Main = withRouter((props: any) => <Layout {...props} />);

export default () => {
    return (
        <Main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/detail" component={Detail} />
                <Route path="/record" component={Record} />
                <Route path="/me" component={Me} />
                <Route path="/talks" component={Talks} />
                <Route path="/bing" component={Bing} />
                <Route path="/test" component={Test} />
            </Switch>
        </Main>
    );
};
