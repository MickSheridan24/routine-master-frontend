import { useState } from "react"
import { createBook } from "../EducationService"

export default function BooksForm(){

    const [name, setName] = useState("")
    const [totalPages, setTotalPages] = useState(0)
    const [difficulty, setdifficulty] = useState(1)


    return <div className="books-form">
        <input type="text" onChange={(e) => setName(e.target.value)}  value ={name} placeholder="Enter Title..."/>
        <label htmlFor="totalPages">Total Pages</label>
        <input id="totalPages" type="number" onChange={(e) => setTotalPages(parseInt(e.target.value))}  value ={totalPages}/>

        <label htmlFor="difficulty">Difficulty</label>
        <input id="difficulty" type="number" onChange={(e) => setdifficulty(parseInt(e.target.value))}  value ={difficulty}/>
        <button onClick={() => createBook({name: name, totalPages: totalPages, entries: [], difficulty: difficulty})}>Create</button>
    </div>
}