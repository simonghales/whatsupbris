import {observable, computed, useStrict, action} from 'mobx';
import {Project} from './Project';

useStrict(true);

export class Store {
    @observable selectedProject: Project;
    @observable clicked: number = 0;
    @computed get clickedSquared() {
        return this.clicked * this.clicked;
    }

    setSelectedProject(project: Project): void {
        action(() => {
            this.selectedProject = project;
        })();
    }

}

export default new Store();
