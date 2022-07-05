import { BASE_ADDRESS } from "../../Constants";
import { refreshObs } from "../../types/ApiTypes";
import { IBook, ICourse, ICourseEntry, IReadingEntry } from "../../types/EducationTypes";
import "./EducationStyles.css"

export function createBook(value: IBook){
    fetch(BASE_ADDRESS + "books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => BookRefreshObs.next())
}

export function createCourse(value: ICourse){
    fetch(BASE_ADDRESS + "courses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => CourseRefreshObs.next())
}


export function createBookItem(bookId: number, value: IReadingEntry){
    fetch(BASE_ADDRESS + "books/" + bookId + "/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => BookRefreshObs.next())
}

export function createCourseItem(courseId: number, value: ICourseEntry){
    fetch(BASE_ADDRESS + "courses/" + courseId + "/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => CourseRefreshObs.next())
}

export function deleteBookEntry(bookId: number, entryId: number){
    fetch(BASE_ADDRESS + "books/" + bookId + "/entries/" + entryId, {
        method: "DELETE",
    }).then(() => BookRefreshObs.next())
}

export function deleteCourseEntry(courseId: number, entryId: number){
    fetch(BASE_ADDRESS + "courses/" + courseId + "/entries/" + entryId, {
        method: "DELETE",
    }).then(() => CourseRefreshObs.next())
}

export function deleteBook(id: number){
    fetch(BASE_ADDRESS + "books/" + id, {
        method: "DELETE",
    }).then(() => BookRefreshObs.next()) 
}

export function deleteCourse(id: number){
    fetch(BASE_ADDRESS + "courses/" + id, {
        method: "DELETE",
    }).then(() => CourseRefreshObs.next()) 
}



export const BookRefreshObs = refreshObs()

export const CourseRefreshObs = refreshObs();

