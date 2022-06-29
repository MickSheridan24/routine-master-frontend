import { useState } from "react"
import { createMundaneList } from "../MundaneDashboardService"

export default function MundaneListForm(){

    const [nameValue, setNameValue] = useState("")

    return <div className="mundane-list-form">
        <input onChange={(e) => setNameValue(e.target.value)} value={nameValue} type="text" placeholder="Create A new List ..." />
        <button onClick={() => createMundaneList({name: nameValue, items: []})} >Create</button>
    </div>
}