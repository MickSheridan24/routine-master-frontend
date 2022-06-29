import { BASE_ADDRESS } from "../Constants";

export function getResource<T>(resource: string, cb: (_: T[]) => void){
    fetch(BASE_ADDRESS + resource)
    .then(resp => resp.text())
    .then(t => cb(JSON.parse(t)))
}