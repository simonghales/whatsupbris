import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store, {Store} from './store/store';
import Clicked from './components/clicked';
import {action} from 'mobx';
import './styles/core.scss';
import './utils/analytics';
import Home from './layout/Home';
import {loadAndStoreInitialData} from './utils/data';

export interface IStore {
    store: Store;
}

declare const process: any;
const dev = process.env.NODE_ENV !== 'production';

loadAndStoreInitialData(store);

ReactDOM.render(<Home/>, document.getElementById('main')); // store={store}
