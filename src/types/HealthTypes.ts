export interface IMealRating{
    id?: number,
    date?: Date,
    mealType: "Breakfast" | "Lunch" | "Dinner" | "Snacks"
    rating : number
}

export interface IExerciseRoutine{

    id?:number,
    name: string,
    baseAmount: number,
    scale: number
}

export interface IExerciseEntry{
    id?: number,
    exerciseRoutineId: number,
    date?: Date,
    score: number
}