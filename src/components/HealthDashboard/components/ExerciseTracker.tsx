import { useState } from "react";
import { IExerciseEntry, IExerciseRoutine, } from "../../../types/HealthTypes";
import HealthBar from "../../Shared/HealthBar";
import { createExerciseRoutineEntry } from "../HealthService";

export default function ExerciseTracker(props: {routine: IExerciseRoutine, entries: IExerciseEntry[]}){
    
    const { scheduleType, requiredOccurrences} = props.routine

    const today = new Date();

    const getEnumLabel = (e: number) => {
        if (e === 1) return "Day"
        if (e === 2) return "Month"
        if (e === 3) return "Year"
        return "Unknown Schedule"
    }

    const dayChecked = (index: number) => {
        const sunday = new Date()
        sunday.setDate(sunday.getDate() - sunday.getDay())
        sunday.setHours(0);
        sunday.setMinutes(0)
        return !!props.entries.find(en => new Date(en.date!).getDay() === index && new Date(en.date!) >= sunday)
    }



    const checkDay = (index: number) => {

       if(index ===  today.getDay())
       {
            const dto: IExerciseEntry = {
                exerciseRoutineId : props.routine.id!,
                date: today,
                score: 5    
            }
           createExerciseRoutineEntry(dto)
       }
       else {
           const day = new Date()
           day.setDate(day.getDate() - day.getDay() + index)
           const dto: IExerciseEntry = {
                exerciseRoutineId : props.routine.id!,
                date: day,
                score: 5    
            }
            createExerciseRoutineEntry(dto)
       }

    }


    const dailySchedule = () => {
        return ["Su", "M", "T", "W", "Th", "F", "Sa"].map((r, i) => (
            <span >
                    <div style={{display: "inline-block"}}>{r}</div>
                    <input checked={dayChecked(i)} disabled={dayChecked(i) || i > (new Date()).getDay()} type="checkbox" onChange={(e) => checkDay(i) }/>
            </span>)
        )

    }

    const getScheduleAmountLabel = () => requiredOccurrences === 1 ? "Once" : requiredOccurrences + " Times"
    return (
        
    <div >
       {dailySchedule()}
    </div>

    ) 
    
    
}