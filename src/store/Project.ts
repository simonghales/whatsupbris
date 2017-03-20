import {ProjectColumn} from './ProjectColumn';
import {observable, useStrict, action} from 'mobx';

useStrict(true);

export class Project {

    id: string;
    @observable columns: ProjectColumn[] = observable([]);
    @observable title: string;

    constructor(id: string, title: string, columns?: ProjectColumn[]) {
        this.id = id;
        this.title = title;
        this.columns = observable(columns);
    }

}