import * as React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectNewCard from '../ProjectNewCard/ProjectNewCard';
import {ProjectColumn as ProjectColumnClass} from '../../store/ProjectColumn';
import {ProjectCard as ProjectCardClass} from '../../store/ProjectCard';
import {observer} from 'mobx-react';
const classNames: any = require('classnames');

interface Interace_ProjectColumn_Props {
    column: ProjectColumnClass
}

@observer
export default class ProjectColumn extends React.Component<Interace_ProjectColumn_Props, {}> {

    renderCardsList() {
        const column = this.props.column;
        return column.cards.map((card: ProjectCardClass) => {
            return <ProjectCard card={card} key={card.id}/>;
        });
    }

    render() {
        const column = this.props.column;
        const columnClass = classNames([
            'ProjectColumn',
            {
                'ProjectColumn--noCards': column.cards.length <= 0
            }
        ]);
        return (
            <div className={columnClass}>
                <h3 className='ProjectColumn__title'>{column.title}</h3>
                <div className='ProjectColumn__body'>
                    <div className='ProjectColumn__cards'>
                        {this.renderCardsList()}
                    </div>
                    <ProjectNewCard/>
                </div>
            </div>
        );
    }
}
