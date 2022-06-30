import { ICreativeProjectEntry } from "../../../types/CreativeProjectTypes";

export default function CreativeProjectEntry(props: {entry: ICreativeProjectEntry}){
    const {entry} = props;
    return <div className="entry-container">
        <div className="description">{entry.description}</div>
        <div className="percent-completed">{entry.percentCompleted}</div>
        <div className="date">{entry.date?.toString()}</div>
    </div>
}