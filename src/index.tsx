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

interface iState {
    ready: boolean;
}

class App extends React.Component<any, iState> {
    constructor(props: any) {
        super(props);
        this.state = {
            ready: false
        };
    }
    render() {
        if (!this.state.ready) return null;
        return (
            <Provider {...stores}>
                <HashRouter ref="navigator">{getRoutes()}</HashRouter>
            </Provider>
        );
    }

    async componentDidMount() {
        await this.regUser();
        await stores.Talk.init(stores.User.uid);
        this.setState({ ready: true });
    }
    async regUser() {
        console.log(stores.User.uid);
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
