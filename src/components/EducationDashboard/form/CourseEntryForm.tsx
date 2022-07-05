import { useState } from "react";
import { ICourse } from "../../../types/EducationTypes";
import { createBookItem, createCourseItem } from "../EducationService";

export default function CourseEntryForm(props: {course: ICourse}){
    const [percentCompleted, setPercentCompleted] = useState(0)

    return <>
        <div className="dash-item-form">

            <label htmlFor="pages">Percent Complete</label>
            <input type="number" value={percentCompleted} onChange={(e) => setPercentCompleted(parseInt(e.target.value))} />

            <button onClick={() => {
                createCourseItem(props.course.id!, {percentCompleted})
            }}>Enter</button>
        </div>
    </>
}