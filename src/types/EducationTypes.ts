
export interface IBook{
    id?: number,
    name: string,
    difficulty: number, 
    totalPages: number, 
    entries: IReadingEntry[]
}

export interface IReadingEntry{
    date?: Date,
    pagesRead:number

}