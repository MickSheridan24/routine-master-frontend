export interface IMundaneList{
    id?: number, 
    name: string, 
    created?: Date,
    items: IMundaneListItem[]
}

export interface IMundaneListItem{
    id?: number,
    name: string,
    complete: boolean,
    created?: Date,
    completedOn?: Date
}

export interface IMundaneRoutine{
    id?: number,
    name: string,
    difficulty: number,
    created?: Date,
}