import React from 'react';
import './index.css';
import './index.less';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import stores from './models/index';
import getRoutes from './routes';

import Finger from 'fingerprintjs2';

class App extends React.Component {
    // constructor(props: any) {
    //     super(props);
    //     //可以提前做一些事情
    // }
    render() {
        return (
            <Provider {...stores}>
                <HashRouter ref="navigator">{getRoutes()}</HashRouter>
            </Provider>
        );
    }

    componentDidMount() {
        this.regUser();
    }
    async regUser() {
        if (stores.User.uid) return;
        try {
            const data = await Finger.getPromise();
            const values = data.map(function(c: any) {
                return c.value;
            });
            const uid = Finger.x64hash128(values.join(''), 31);
            stores.User.setUid(uid);
        } catch (error) {
            console.log(error);
        }
    }
}

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
