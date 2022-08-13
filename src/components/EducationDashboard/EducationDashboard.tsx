import { useEffect, useState } from "react"
import { getResource } from "../../api/BaseApiUtilities"
import { BASE_ADDRESS } from "../../Constants"
import { useResource } from "../../hooks/resourceHooks"
import { IBook, ICourse, ICourseSummary, IReadingSummary } from "../../types/EducationTypes"
import Graph from "../Shared/Graph"
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
    const [showReadingGraph, setShowReadingGraph] = useState(false)
    const [showCourseGraph, setShowCourseGraph] = useState(false)
    const [readingSummary, setReadingSummary] = useState<IReadingSummary[]>([])
    const [courseSummary, setCourseSummary] = useState<ICourseSummary[]>([])

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

    useEffect(() => {
        fetch(BASE_ADDRESS + "readingSummary")
        .then(r => r.json()
        .then(r => {
            console.log(r)
            return r
        })
        .then(setReadingSummary))
    }, [books])

    useEffect(() => {
        fetch(BASE_ADDRESS + "courseSummary")
        .then(r => r.json()
        .then(r => {
            console.log(r)
            return r
        })
        .then(setCourseSummary))
    }, [courses])

    const getReadingGraphData= () => {
        
        const average = readingSummary.map((s, i) => {
            return {x: i + 1, y: s.average}
        })
        const present = readingSummary.map((s, i) => {
            return {x: i + 1, y: s.present}
        })
        const lastMonth = readingSummary.map((s, i) => {
            return {x: i + 1, y: s.lastMonth}
        })
        return [ {name: "Present Month", color: "#337733 ", data: present},
                {name: "Last Month",color: "#447777" ,  data: lastMonth},
                {name: "Average", color: "#773333", data: average}, 
            ]   
    }

    const getCourseGraphData= () => {
        
        const average = courseSummary.map((s, i) => {
            return {x: i + 1, y: s.average}
        })
        const present = courseSummary.map((s, i) => {
            return {x: i + 1, y: s.present}
        })
        const lastMonth = courseSummary.map((s, i) => {
            return {x: i + 1, y: s.lastMonth}
        })
        return [ {name: "Present Month", color: "#337733 ", data: present},
                {name: "Last Month",color: "#447777" ,  data: lastMonth},
                {name: "Average", color: "#773333", data: average}, 
            ]   
    }
    return <>
    
    <div className="dashboard-container education-theme">
        <div className="dashboard-column main">
            <button style = {{marginBottom: "8px"}} className="dash-button" onClick={(e) => setShowReadingGraph(!showReadingGraph)}>{showReadingGraph ? "Hide Graph" : "Show Reading Graph"}</button>
            {showReadingGraph && <Graph lines={getReadingGraphData()}></Graph> }
            <h3>Books</h3>
            <div className="books-container">
                {books.map(b => <Book setSelectedBook={setSelectedBook} key={b.id} book={b}></Book>)}
            </div>
            <BooksForm></BooksForm>
        </div>
        <hr />
       
        <div className="dashboard-column main">
        <button style = {{marginBottom: "8px"}} className="dash-button" onClick={(e) => setShowCourseGraph(!showCourseGraph)}>{showCourseGraph ? "Hide Graph" : "Show Course Graph"}</button>
            {showCourseGraph && <Graph lines={getCourseGraphData()}></Graph> }
            <h3>Courses</h3>
            {courses.map(c => <Course setSelectedCourse={setSelectedCourse} course={c}></Course>)}
            <CourseForm></CourseForm>
        </div>
        <hr />

        <div className="dashboard-column">
            {selectedBook ? <>
                <h3>Reading Sessions</h3>
                <h5>{selectedBook.name}</h5>
                {selectedBook.entries
                .map(e => <ReadingEntry bookId={selectedBook.id!} entry={e}></ReadingEntry>)}
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