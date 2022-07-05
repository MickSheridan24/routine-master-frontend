import { ICourse } from "../../../types/EducationTypes";
import HealthBar from "../../Shared/HealthBar";
import { deleteCourse } from "../EducationService";

export default function Course(props: {course: ICourse,  setSelectedCourse:(_:ICourse) => void}){

    const {course, setSelectedCourse} = props
    const totalComplete = props.course.entries.reduce((m, e) => e.percentCompleted + m, 0)

    return <>
        <div onClick={() => setSelectedCourse(course)} className="dash-item">
            <div className="info">
                <div>{props.course.name} ({totalComplete}%)</div>
                <HealthBar total={100} amount={totalComplete} redOn="None"></HealthBar>
            </div>
            <div className="tools">
            <div className="delete" onClick={(e) => {
                    e.stopPropagation()
                    deleteCourse(props.course.id!)}}>X</div>
            </div>
        </div>
    </>
}