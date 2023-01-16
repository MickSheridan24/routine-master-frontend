export interface IMealRating{
    id?: number,
    date?: Date,
    mealType: "Breakfast" | "Lunch" | "Dinner" | "Snacks"
    rating : number
}

export interface IExerciseRoutine{

    id?:number,
    name: string,
    requiredOccurrences: number, 
    scheduleType: EScheduleType,
}

export interface IExerciseEntry{
    id?: number,
    exerciseRoutineId: number,
    date?: Date,
    score: number
}


export enum EScheduleType{
    DAY = 1, WEEK=2, MONTH = 3, YEAR = 4
}