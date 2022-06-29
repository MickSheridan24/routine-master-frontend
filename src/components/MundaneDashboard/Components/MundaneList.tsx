import { useState } from "react"
import { IMundaneList } from "../../../types/MundaneTypes"
import MundaneListItemForm from "../Forms/MundaneListItemForm"
import { deleteMundaneList } from "../MundaneDashboardService"
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
            <div className="delete" onClick={() => deleteMundaneList(list.id!)}> Delete</div>
        </div>

        <div className="count" onClick={() => setShowItems(!showItems)}> {showItems ? "V" : ">"}</div>
        {showItems && <div className="list">{mapItems()} </div>}
        <MundaneListItemForm list={list}></MundaneListItemForm>
    </div>
}