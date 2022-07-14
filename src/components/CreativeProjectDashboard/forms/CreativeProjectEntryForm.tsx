import { useState } from "react";
import { createCreativeProjectEntry } from "../CreativeProjectService";

export default function CreativeProjectEntryForm(props: {projectId: number}){
    const [description, setDescription] = useState("")
    const [percentComplete, setPercentComplete] = useState(0)

    return <>
        {props.projectId ? <div className="dash-item-form">
            <label htmlFor="description">Description</label>
            <input value={description} onChange={(e) => setDescription(e.target.value)} id="description" type="text" />
            <label htmlFor="percent">Percent Completed</label>
            <input value={percentComplete} onChange={(e) => setPercentComplete(parseFloat(e.target.value))} id="percent" type="number" />

            <button onClick={() => createCreativeProjectEntry(props.projectId, {
               projectId: props.projectId,
               description: description,
               percentCompleted: percentComplete
            })} >Enter</button>
        </div> : <></>}
    </>
}