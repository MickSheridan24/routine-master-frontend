import { useState } from "react"
import { createCreativeProject } from "../CreativeProjectService"

export default function CreativeProjectForm(){
    const [nameValue, setNameValue] = useState("")
    const [descriptionValue, setDescriptionValue] = useState("")
    
    
    
    return <div className="project-form">
        <input onChange={(e) => setNameValue(e.target.value)} value={nameValue} placeholder="Enter a Name..." type="text"/>
        <textarea onChange={(e) => setDescriptionValue(e.target.value)}  value ={descriptionValue} placeholder="Enter a Description..."/>
        <button onClick={() => createCreativeProject({name: nameValue, description: descriptionValue, entries: []})}>Create</button>
    </div>
}