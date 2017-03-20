import {Store} from '../store/store';
import {Project} from '../store/Project';
import {ProjectColumn} from '../store/ProjectColumn';
import {ProjectCard} from '../store/ProjectCard';
import {action} from 'mobx';

export interface Interface_ProjectCardData {
    id: string,
    title: string,
    description: string
}

export interface Interface_ProjectColumnData {
    id: string,
    title: string,
    cards: Interface_ProjectCardData[]
}

export interface Interface_ProjectData {
    id: string,
    title: string,
    columns: Interface_ProjectColumnData[]
}

export function loadAndStoreInitialData(store: Store): void {
    const data: any = require('../data/project.json');
    action(() => {
        const project = parseDataAndCreateProject(data);
        store.setSelectedProject(project);
    })();
}

function parseDataAndCreateCards(cardsData: Interface_ProjectCardData[]): ProjectCard[] {
    let cards: ProjectCard[] = [];

    cardsData.forEach((data: Interface_ProjectCardData) => {
        const id = data.id;
        const title = data.title;
        const description = data.description;
        cards.push(
            new ProjectCard(id, title, description)
        );
    });

    return cards;
}

function parseDataAndCreateColumns(columnsData: Interface_ProjectColumnData[]): ProjectColumn[] {
    let columns: ProjectColumn[] = [];

    columnsData.forEach((data: Interface_ProjectColumnData) => {
        const id = data.id;
        const title = data.title;
        const cards = parseDataAndCreateCards(data.cards);
        columns.push(
            new ProjectColumn(id, title, cards)
        );
    });

    return columns;
}

function parseDataAndCreateProject(data: Interface_ProjectData = null): Project {

    const id = data.id;
    const title = data.title;
    const columns = parseDataAndCreateColumns(data.columns);

    return new Project(id, title, columns);

}