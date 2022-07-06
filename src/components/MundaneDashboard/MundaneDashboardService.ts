import { BASE_ADDRESS } from "../../Constants";
import { refreshObs } from "../../types/ApiTypes";
import { IMundaneList, IMundaneListItem, IMundaneRoutine } from "../../types/MundaneTypes";


export function createMundaneList(value: IMundaneList){
    fetch(BASE_ADDRESS + "lists", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => mundaneListRefereshObs.next())
}


export function createMundaneListItem(listId: number, value: IMundaneListItem){
    fetch(BASE_ADDRESS + "lists/" + listId + "/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => mundaneListRefereshObs.next())
}

export function deleteMundaneList(id: number){
    fetch(BASE_ADDRESS + "lists/" + id, {
        method: "DELETE",
    }).then(() => mundaneListRefereshObs.next()) 
}

export function completeMundaneListItem(id: number){
    fetch(BASE_ADDRESS + "lists/items/" + id + "/complete", {
        method: "PUT"
    }).then(() => mundaneListRefereshObs.next())
}


export const mundaneListRefereshObs = refreshObs()

export const mundaneRoutineRefereshObs =  refreshObs()
