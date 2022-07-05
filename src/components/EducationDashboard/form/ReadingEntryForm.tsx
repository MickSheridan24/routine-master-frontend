import { useState } from "react";
import { IBook } from "../../../types/EducationTypes";
import { createBookItem } from "../EducationService";

export default function ReadingEntryForm(props: {book: IBook}){
    const [pagesRead, setPagesRead] = useState(0)

    return <>
        <div className="dash-item-form">

            <label htmlFor="pages">Pages Read</label>
            <input type="number" value={pagesRead} onChange={(e) => setPagesRead(parseInt(e.target.value))} />

            <button onClick={() => {
                createBookItem(props.book.id!, {pagesRead})
            }}>Enter</button>
        </div>
    </>
}