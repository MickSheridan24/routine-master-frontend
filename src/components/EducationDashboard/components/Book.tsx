import { IBook } from "../../../types/EducationTypes";
import HealthBar from "../../Shared/HealthBar";
import { deleteBook } from "../EducationService";

export default function Book(props: {book: IBook, setSelectedBook:(_:IBook) => void}){
    const {book, setSelectedBook} = props

    const totalPagesRead = book.entries.reduce((m, e) => m + e.pagesRead, 0)

    return <div  onClick={() => setSelectedBook(book)} className="book-container">
        <div className="info">
            <div className="name">{book.name}</div>
            <div className="total-pages">{totalPagesRead} / {book.totalPages} Pages</div>

            <HealthBar redOn="None" amount={totalPagesRead} total={book.totalPages}></HealthBar>
        </div>
        <div className="tools">
            <div className="delete" onClick={(e) => {
                    e.stopPropagation()
                    deleteBook(book.id!)}}>X</div>
        </div>
    </div>
}