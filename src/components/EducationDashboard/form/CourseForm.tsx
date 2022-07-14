import { useState } from "react"
import { createCourse } from "../EducationService"

export default function CourseForm(){

    const [name, setName] = useState("")
    const [difficulty, setdifficulty] = useState(1)


    return <div className="dash-item-form">
        <input type="text" onChange={(e) => setName(e.target.value)}  value ={name} placeholder="Enter Title..."/>
        <label htmlFor="difficulty">Difficulty</label>
        <input id="difficulty" type="number" onChange={(e) => setdifficulty(parseInt(e.target.value))}  value ={difficulty}/>
        <button onClick={() => createCourse({name: name, entries: [], difficulty: difficulty})}>Create</button>
    </div>
}