export enum ActionType {
    FETCH_JOBS = 'FETCH_JOBS',
    FETCH_SEARCHED_JOBS = 'FETCH_SEARCHED_JOBS',
    FETCH_BY_CATEGORY = 'FETCH_BY_CATEGORY',
    FETCH_COMPANY = 'FETCH_COMPANY',
    ADD_TO_SAVED = 'ADD_TO_SAVED',
    REMOVE_FROM_SAVED = 'REMOVE_FROM_SAVED'
}

interface actionFetchJobs {
    type: ActionType.FETCH_JOBS;
}

interface actionSearch {
    type: ActionType.FETCH_SEARCHED_JOBS;
    payload: Comment[];
}

interface actionByCategory {
    type: ActionType.FETCH_BY_CATEGORY;
    payload: string;
}
interface actionFetchCompany {
    type: ActionType.FETCH_COMPANY;
    payload: string;
}
interface actionAddSaved {
    type: ActionType.ADD_TO_SAVED;
    payload: string;
}
interface actionRemoveSaved {
    type: ActionType.REMOVE_FROM_SAVED;
    payload: string;
}

export type Action = actionFetchJobs | actionSearch | actionByCategory | actionByCategory | actionFetchCompany | actionAddSaved | actionRemoveSaved;