import * as React from 'react';

import SiteHeader from '../components/SiteHeader/SiteHeader';
import SiteBody from '../components/SiteBody/SiteBody';

export default class Home extends React.Component<{}, {}> {
    render() {
        return (
            <div className='home'>
                <SiteHeader />
                <SiteBody />
            </div>
        );
    }
}
