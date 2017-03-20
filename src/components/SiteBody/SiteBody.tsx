import * as React from 'react';
import Project from '../Project/Project';
import {MainSidebar} from '../MainSidebar/MainSidebar';
import {MainResults} from '../MainResults/MainResults';

export default class SiteBody extends React.Component<{}, {}> {
    render() {
        return (
            <div className='SiteBody'>
                <div className='SiteBody__content'>
                    <MainSidebar/>
                    <MainResults/>
                </div>
            </div>
        );
    }
}
