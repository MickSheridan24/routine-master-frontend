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


    return <div className="dash-item">
        <div className="info">
        <div className="header">
            <h3>{list.name}</h3>
            <span className="expand" onClick={() => setShowItems(!showItems)}> {showItems ? "V" : ">"}</span>
        </div>
        
        
        
        {showItems && <div className="list">{mapItems()} </div>}
        <MundaneListItemForm list={list}></MundaneListItemForm>
        </div>
        <div className="tools">
        <div className="delete" onClick={(e) => {
                    e.stopPropagation()
                    deleteMundaneList(list.id!)}}>X</div>
        </div>
    </div>
}