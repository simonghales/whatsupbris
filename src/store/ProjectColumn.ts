
import {ProjectCard} from './ProjectCard';
import {observable} from 'mobx';
export class ProjectColumn {

    id: string;
    @observable title: string;
    @observable cards: ProjectCard[] = observable([]);

    constructor(id: string, title: string, cards?: ProjectCard[]) {
        this.id = id;
        this.title = title;
        this.cards = observable(cards);
    }

}