import * as React from 'react';
import {PROJECT_VIEW_DATA, PROJECT_VIEW_VISUAL} from '../Project/Project';
const classNames: any = require('classnames');

interface I_ProjectHeader_Props {
    selectedView: string,
    selectDataView(): void,
    selectVisualView(): void,
}

export default class ProjectHeader extends React.Component<I_ProjectHeader_Props, {}> {
    render() {
        const selectedView = this.props.selectedView;
        const selectDataView = this.props.selectDataView;
        const selectVisualView = this.props.selectVisualView;
        const dataTabClasses = classNames([
            'ProjectHeader__modeTabs__tab',
            {
                'ProjectHeader__modeTabs__tab--active': selectedView === PROJECT_VIEW_DATA
            }
        ]);
        const visualTabClasses = classNames([
            'ProjectHeader__modeTabs__tab',
            {
                'ProjectHeader__modeTabs__tab--active': selectedView === PROJECT_VIEW_VISUAL
            }
        ]);
        return (
            <div className='ProjectHeader'>
                <h2 className='ProjectHeader__title'>Project Header</h2>
                <div className='ProjectHeader__options'>
                    <div className='ProjectHeader__modeTabs'>
                        <button className={dataTabClasses}
                                onClick={selectDataView}>Data</button>
                        <button className={visualTabClasses}
                                onClick={selectVisualView}>Visual</button>
                    </div>
                </div>
            </div>
        );
    }
}
