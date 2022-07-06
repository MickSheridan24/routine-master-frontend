import { useState } from "react";
import { IReadingEntry } from "../../../types/EducationTypes";
import { formatDate } from "../../../utilities/DateHelpers";
import { deleteBookEntry } from "../EducationService";

export default function ReadingEntry(props: {bookId: number,  entry: IReadingEntry}){
    const {entry} = props
    
    return <div className="dash-item">
        <div className="info">
            <div id="date">{formatDate(entry.date!.toString())}</div>

            <div id="pagesRead">{entry.pagesRead} Pages Read</div>
        </div>
        <div className="tools">
            <div className="delete" onClick={(e) => {
                        e.stopPropagation()
                        deleteBookEntry(props.bookId, entry.id!)}}>X</div>
        </div>
    </div>
}