import { ICourseEntry } from "../../../types/EducationTypes";
import { formatDate } from "../../../utilities/DateHelpers";
import { deleteCourseEntry } from "../EducationService";

export default function CourseEntry(props: {courseId: number,  entry: ICourseEntry}){
    const {entry} = props
    
    return <div className="dash-item">
        <div className="info">
            <label htmlFor="Date">Date</label>
            <div id="Date">{formatDate(entry.date!.toString())}</div>

            <label htmlFor="pagesRead">Percent Completed</label>
            <div id="pagesRead">{entry.percentCompleted}</div>
        </div>
        <div className="tools">
            <div className="delete" onClick={(e) => {
                        e.stopPropagation()
                        deleteCourseEntry(props.courseId, entry.id!)}}>X</div>
        </div>
    </div>
}