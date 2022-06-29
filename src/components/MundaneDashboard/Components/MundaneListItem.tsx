import { IMundaneList, IMundaneListItem } from "../../../types/MundaneTypes";

export default function MundaneListItem(props: {item: IMundaneListItem}){
    var {item} = props;
    return <div className="mundane-list-item">
        <div className="name">{item.name}</div>
        <div className="createdOn">{item.created?.toString() ?? ""}</div>
    </div>
}