import { useState } from "react";
import { EScheduleType } from "../../../types/HealthTypes";
import {createExerciseRoutine} from "../HealthService"

export default function ExerciseRoutineForm(){

    const [name, setName] = useState("")
    const [requiredOccurrences, setRequiredOccurrences] = useState(1)
    const [scheduleType, setScheduleType] = useState<EScheduleType>(EScheduleType.DAY)
    
    return <div className="dash-item-form">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onChange={(e) => setName(e.target.value)} value = {name} />

        <label>Schedule</label>
        <div>

            <input className="inline" id="occ" type="number" onChange={(e) => setRequiredOccurrences(parseInt(e.target.value))} value = {requiredOccurrences}/>
            <span> time per </span>
            <select onChange={(e) => setScheduleType(e.target.value as unknown as EScheduleType)}>
                <option selected={scheduleType === EScheduleType.DAY} value={EScheduleType.DAY}>Day</option>
                <option selected={scheduleType === EScheduleType.MONTH} value={EScheduleType.MONTH}>Month</option>
                <option selected={scheduleType === EScheduleType.YEAR}  value={EScheduleType.YEAR}>Year</option>
            </select>
        </div>

        <div className="submit">
            <button onClick={() => createExerciseRoutine({name, requiredOccurrences,scheduleType})}>Create Routine</button>
        </div>
    </div>

}