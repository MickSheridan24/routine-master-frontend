import { ICreativeProjectEntry } from "../../../types/CreativeProjectTypes";
import { formatDate } from "../../../utilities/DateHelpers";
import { deleteCreativeProjectEntry } from "../CreativeProjectService";

export default function CreativeProjectEntry(props: {projectId: number, entry: ICreativeProjectEntry}){
    const {entry, projectId} = props;
    return <div className="dash-item">
        <div className="info">
            <div className="description">{entry.description}</div>
            <div className="percent-completed">{entry.percentCompleted}</div>
            <div className="date">{formatDate(entry.date!.toString())}</div>
        </div>
        <div className="tools">
            <div className="delete" onClick={(e) => {
                    e.stopPropagation()
                    deleteCreativeProjectEntry(projectId, entry.id!)}}>X
            </div>
        </div>
    </div>
}