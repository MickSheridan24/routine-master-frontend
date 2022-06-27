import { IMundaneList } from "../../../types/MundaneTypes"
import MundaneListItem from "./MundaneListItem"

export default function MundaneList(props: {list: IMundaneList}){
    const list = props.list

    return <div className="mundane-list">
        <h5>{list.name}</h5>
        {list.items.map(item => {
            return <MundaneListItem key={item.id} item={item}></MundaneListItem>
        })}
    </div>
}