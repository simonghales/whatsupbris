import * as React from 'react';
import {observer} from 'mobx-react';
import store from '../store/store';

const styles: any = require('./clicked.scss');

const Clicked = () => (
    <div>
        <span>{store.clicked}</span>
        <br/>
        <span className={styles.redSpan}>{store.clickedSquared}</span>
    </div>
);

export default observer(Clicked);
