import { IBook } from "../../../types/EducationTypes";

export default function Book(props: {book: IBook}){
    const {book} = props

    return <div className="book-container">
        <div className="name">{book.name}</div>
        <div className="total-pages">{book.totalPages}</div>
    </div>
}