import { BASE_ADDRESS } from "../Constants";
import { IObservable } from "../types/ApiTypes";

export function postResource(route: string, value: any, observables: IObservable[]){
    fetch(BASE_ADDRESS + route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => observables.forEach(obs => obs.next()))
}

export function putResource(route: string, id: number, value: any, observables: IObservable[]){
    fetch(BASE_ADDRESS + route + "/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => observables.forEach(obs => obs.next()))
}

export function deleteResource(route: string, id: number, observables: IObservable[]){
    fetch(BASE_ADDRESS + route + "/" + id, {
        method: "DELETE",
    }).then(() => observables.forEach(obs => obs.next()))
}