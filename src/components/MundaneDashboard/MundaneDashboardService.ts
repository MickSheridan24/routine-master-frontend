import { BASE_ADDRESS } from "../../Constants";
import { IMundaneList } from "../../types/MundaneTypes";

export function getMundaneLists(cb: (_: IMundaneList[]) => void){
    fetch(BASE_ADDRESS + "lists")
    .then(resp => resp.text()
    .then(t => cb(JSON.parse(t))))
}



export function createMundaneList(value: IMundaneList){
    fetch(BASE_ADDRESS + "lists", {
        method: "POST",
        headers: {
            contentType: "Application/json"
        },
        body: JSON.stringify(value)
    })
}