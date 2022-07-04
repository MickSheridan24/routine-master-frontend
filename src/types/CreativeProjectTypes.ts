export interface ICreativeProject{
    name: string,
    id?: number, 
    created?: Date,
    description: string,
    entries: ICreativeProjectEntry[]
}

export interface ICreativeProjectEntry{
    id?: number,
    projectId?:| number
    date?: Date,
    percentCompleted: number,
    description: string
}