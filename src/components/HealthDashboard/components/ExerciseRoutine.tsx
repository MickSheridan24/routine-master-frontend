import { useState } from "react";
import { IExerciseEntry, IExerciseRoutine, } from "../../../types/HealthTypes";
import HealthBar from "../../Shared/HealthBar";
import ExerciseTracker from "./ExerciseTracker";

export default function ExerciseRoutine(props: {routine: IExerciseRoutine, entries: IExerciseEntry[]}){
    const [isEditing, setIsEditing] = useState(false)
    
    const { scheduleType, requiredOccurrences} = props.routine

    const getEnumLabel = (e: number) => {
        if (e === 1) return "Day"
        if (e === 2) return "Month"
        if (e === 3) return "Year"
        return "Unknown Schedule"
    }
    const getScheduleAmountLabel = () => requiredOccurrences === 1 ? "Once" : requiredOccurrences + " Times"
    return isEditing ?<></>
    
    : <div className="dash-item">
        <div className="info">
            <div className="name">{props.routine.name}</div>
            <div>{getScheduleAmountLabel() + " per " + getEnumLabel(scheduleType)}</div>

            <ExerciseTracker entries={props.entries} routine={ props.routine}/>
        </div>
    </div>
    
    
}