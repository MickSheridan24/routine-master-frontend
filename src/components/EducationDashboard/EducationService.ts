import { BASE_ADDRESS } from "../../Constants";
import { refreshObs } from "../../types/ApiTypes";
import { IBook, IReadingEntry } from "../../types/EducationTypes";
import { IMundaneList, IMundaneListItem, IMundaneRoutine } from "../../types/MundaneTypes";


export function createBook(value: IBook){
    fetch(BASE_ADDRESS + "books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => BookRefereshObs.next())
}


export function createBookItem(bookId: number, value: IReadingEntry){
    fetch(BASE_ADDRESS + "books/" + bookId + "entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => BookRefereshObs.next())
}

export function deleteBook(id: number){
    fetch(BASE_ADDRESS + "books/" + id, {
        method: "DELETE",
    }).then(() => BookRefereshObs.next()) 
}


export const BookRefereshObs = refreshObs()

