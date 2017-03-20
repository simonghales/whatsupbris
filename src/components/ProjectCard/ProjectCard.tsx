import * as React from 'react';
import {ProjectCard as ProjectCardClass} from '../../store/ProjectCard';
import {observer} from 'mobx-react';

interface Interface_ProjectCard_Props {
    card: ProjectCardClass
}

@observer
export default class ProjectCard extends React.Component<Interface_ProjectCard_Props, {}> {
    render() {
        const card = this.props.card;
        return (
            <div className='ProjectCard'>
                <div className='ProjectCard__title'>{card.title}</div>
                {
                    card.description ? (
                        <div className='ProjectCard__description'>{card.description}</div>
                        ) : null
                }
            </div>
        );
    }
}
