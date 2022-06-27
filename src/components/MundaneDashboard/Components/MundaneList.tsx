import { useState } from "react"
import { IMundaneList } from "../../../types/MundaneTypes"
import MundaneListItemForm from "../Forms/MundaneListItemForm"
import MundaneListItem from "./MundaneListItem"

export default function MundaneList(props: {list: IMundaneList}){
    const list = props.list

    const[showItems, setShowItems] = useState(false)

    const mapItems = () =>  list.items.map(item => {
        return  <MundaneListItem key={item.id} item={item}></MundaneListItem>
    })


    return <div className="mundane-list">
        <div className="header">
            <h5>{list.name}</h5>
            <div className="count" onClick={() => setShowItems(!showItems)}> {showItems ? "-" : "+"}</div>
        </div>
        {showItems && <div className="list">{mapItems()} </div>}
        <MundaneListItemForm></MundaneListItemForm>
    </div>
}