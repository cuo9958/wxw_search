import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Layout from '../pages/layout/index';
import Home from '../pages/home/index';
import Search from '../pages/search/index';
import Detail from '../pages/detail/index';
import Record from '../pages/record/index';
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
                <Route path="/test" component={Test} />
            </Switch>
        </Main>
    );
};
