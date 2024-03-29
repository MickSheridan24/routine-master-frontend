
export interface IBook{
    id?: number,
    name: string,
    difficulty: number, 
    totalPages: number, 
    entries: IReadingEntry[]
}

export interface IReadingEntry{
    id?: number,
    date?: Date,
    pagesRead:number

}

export interface ICourse{
    id?: number, 
    name: string,
    difficulty: number,
    entries: ICourseEntry[]
}

export interface ICourseEntry{
    id?: number, 
    date?: Date,
    percentCompleted: number
}

export interface IReadingSummary{
    present: number, 
    lastMonth: number, 
    average: number
}


export interface ICourseSummary{
    present: number, 
    lastMonth: number, 
    average: number
}