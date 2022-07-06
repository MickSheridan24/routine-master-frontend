import { IMundaneList, IMundaneListItem } from "../../../types/MundaneTypes";
import { formatDate } from "../../../utilities/DateHelpers";
import { completeMundaneListItem } from "../MundaneDashboardService";

export default function MundaneListItem(props: {item: IMundaneListItem}){
    var {item} = props;

    return <div className="mundane-list-item">
        <input type="checkbox" onChange={() => completeMundaneListItem(item.id!)} />
        <div className="name">{item.name}</div>
        <div className="createdOn">{formatDate(item.created!.toString()) ?? ""}</div>
    </div>
}