import { refreshObs } from "../../types/ApiTypes";
import { IExerciseEntry, IExerciseRoutine, IMealRating } from "../../types/HealthTypes";
import { postResource, putResource } from "../../utilities/ApiHelpers";


export function logMeal(value: IMealRating){
    postResource("meals", value, [mealsRefreshObs])
}



export function createExerciseRoutine(value: IExerciseRoutine){
    postResource("exerciseRoutines", value, [exerciseRefreshObs])
}

export function createExerciseRoutineEntry (value: IExerciseEntry){
    postResource("exerciseRoutines/" + value.exerciseRoutineId + "/entries", value, [exerciseEntriesRefreshObs])
}

export function updateExerciseRoutine(id:number, value: IExerciseRoutine){
    putResource("exerciseRoutines", id, value, [exerciseRefreshObs] )
}


export const mealsRefreshObs = refreshObs()
export const exerciseRefreshObs = refreshObs()
export const exerciseEntriesRefreshObs = refreshObs()