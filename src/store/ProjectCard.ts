import {observable} from 'mobx';
export class ProjectCard {

    id: string;
    @observable title: string;
    @observable description: string;

    constructor(id: string, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

}