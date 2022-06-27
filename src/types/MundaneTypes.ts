export interface IMundaneList{
    id: number, 
    name: string, 
    createdOn: Date,
    items: IMundaneListItem[]
}

export interface IMundaneListItem{
    id: number,
    name: string,
    complete: boolean,
    createdOn: Date,
    completedOn?: Date
}

export interface IMundaneRoutine{
    id: number,
    name: string,
    difficulty: number,
    createdOn: Date,
}