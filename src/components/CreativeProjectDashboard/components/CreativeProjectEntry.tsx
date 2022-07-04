import { ICreativeProjectEntry } from "../../../types/CreativeProjectTypes";
import { formatDate } from "../../../utilities/DateHelpers";

export default function CreativeProjectEntry(props: {entry: ICreativeProjectEntry}){
    const {entry} = props;
    return <div className="entry-container">
        <div className="description">{entry.description}</div>
        <div className="percent-completed">{entry.percentCompleted}</div>
        <div className="date">{formatDate(entry.date!.toString())}</div>
    </div>
}