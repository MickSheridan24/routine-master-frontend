import { useEffect, useState } from "react"
import { getResource } from "../../api/BaseApiUtilities"
import { IBook } from "../../types/EducationTypes"
import Book from "./components/Book"
import { BookRefereshObs } from "./EducationService"
import BooksForm from "./form/BooksForm"

export default function EducationDashboard(){
    const [books, setBooks] = useState<IBook[]>([])
    const [refreshBooks, setRefreshBooks] = useState(false)
    const [courses, setCourses] = useState([])

    BookRefereshObs.subscribe(() => setRefreshBooks(true))
    
    useEffect(() => {
        setRefreshBooks(false)
        getResource<IBook>("books", setBooks)
    }, [refreshBooks])


    return <>
    
    <div className="books-section">
        <h3>Books</h3>
        <div className="books-container">
            {books.map(b => <Book key={b.id} book={b}></Book>)}
        </div>
        <BooksForm></BooksForm>
    </div>

    </>
}