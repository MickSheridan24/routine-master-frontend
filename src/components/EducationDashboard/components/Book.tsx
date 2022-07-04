import { IBook } from "../../../types/EducationTypes";
import { deleteBook } from "../EducationService";

export default function Book(props: {book: IBook}){
    const {book} = props

    return <div className="book-container">
        <div className="info">
            <div className="name">{book.name}</div>
            <div className="total-pages">{book.totalPages} Pages</div>
        </div>
        <div className="tools">
            <div className="delete" onClick={(e) => {
                    e.stopPropagation()
                    deleteBook(book.id!)}}>X</div>
        </div>
    </div>
}