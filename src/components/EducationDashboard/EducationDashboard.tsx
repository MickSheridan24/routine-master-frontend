import { useEffect, useState } from "react"
import { getResource } from "../../api/BaseApiUtilities"
import { useResource } from "../../hooks/resourceHooks"
import { IBook, ICourse } from "../../types/EducationTypes"
import Book from "./components/Book"
import Course from "./components/Course"
import CourseEntry from "./components/CourseEntry"
import ReadingEntry from "./components/ReadingEntry"
import { BookRefreshObs, CourseRefreshObs } from "./EducationService"
import BooksForm from "./form/BooksForm"
import CourseEntryForm from "./form/CourseEntryForm"
import CourseForm from "./form/CourseForm"
import ReadingEntryForm from "./form/ReadingEntryForm"

export default function EducationDashboard(){
    const [books, setBooks] = useResource<IBook>("books", BookRefreshObs)
    const [courses, setCourses] = useResource<ICourse>("courses", CourseRefreshObs)
    const [selectedBook, setSelectedBook] = useState<IBook | undefined>()
    const [selectedCourse, setSelectedCourse] = useState<ICourse | undefined>()
    

    useEffect(() => {
        const refreshedSelected : ICourse | undefined = courses.find(b => b.id === selectedCourse?.id) ?? undefined
        setSelectedCourse(refreshedSelected ? {...refreshedSelected} : undefined )
    }, [courses])

    useEffect(() => {
        const refreshedSelected : IBook | undefined = books.find(b => b.id === selectedBook?.id) ?? undefined
        setSelectedBook(refreshedSelected ? {...refreshedSelected} : undefined )
    }, [books])

    useEffect(() => {
        if(selectedBook){
            setSelectedCourse(undefined)
        }
    }, [selectedBook])

    useEffect(() => {
        if(selectedCourse){
            setSelectedBook(undefined)
        }
    }, [selectedCourse])



    return <>
    
    <div className="dashboard-container">
        <div className="dashboard-column">
            <h3>Books</h3>
            <div className="books-container">
                {books.map(b => <Book setSelectedBook={setSelectedBook} key={b.id} book={b}></Book>)}
            </div>
            <BooksForm></BooksForm>
        </div>
        <hr />
       
        <div className="dashboard-column">
            <h3>Courses</h3>
            {courses.map(c => <Course setSelectedCourse={setSelectedCourse} course={c}></Course>)}
            <CourseForm></CourseForm>
        </div>
        <hr />

        <div className="dashboard-column">
            {selectedBook ? <>
                <h3>Reading Sessions</h3>
                <h5>{selectedBook.name}</h5>
                {selectedBook.entries.map(e => <ReadingEntry bookId={selectedBook.id!} entry={e}></ReadingEntry>)}
                <ReadingEntryForm book={selectedBook}></ReadingEntryForm>
            </>
            : <></>}

            {selectedCourse ? <>
                <h3>Course Sessions</h3>
                <h5>{selectedCourse.name}</h5>
                {selectedCourse.entries.map(e => <CourseEntry courseId={selectedCourse.id!} entry={e}></CourseEntry>)}
                <CourseEntryForm course={selectedCourse}></CourseEntryForm>
            </>
            : <></>}
        </div>
    </div>

    </>
}