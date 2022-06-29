import { useState } from "react"
import { IMundaneList, IMundaneListItem } from "../../../types/MundaneTypes"
import { createMundaneListItem } from "../MundaneDashboardService"

export default function MundaneListItemForm(props:{list: IMundaneList}){

    const [nameValue, setNameValue] = useState("")
    
    return <div className="mundane-li-form">
        <input onChange={(e) => setNameValue(e.target.value)} value={nameValue} type="text" placeholder="New Task..." />
        <button onClick={() => createMundaneListItem(props.list.id!, {name: nameValue, complete: false})}>Create</button>
    </div>
}