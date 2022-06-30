import { BASE_ADDRESS } from "../../Constants";
import { refreshObs } from "../../types/ApiTypes";
import { ICreativeProject, ICreativeProjectEntry } from "../../types/CreativeProjectTypes";


export function createCreativeProject(value: ICreativeProject){
    fetch(BASE_ADDRESS + "projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => CreativeProjectRefereshObs.next())
}


export function createCreativeProjectEntry(projectId: number, value: ICreativeProjectEntry){
    fetch(BASE_ADDRESS + "projects/" + projectId + "/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => CreativeProjectRefereshObs.next())
}

export function deleteCreativeProject(id: number){
    fetch(BASE_ADDRESS + "projects/" + id, {
        method: "DELETE",
    }).then(() => CreativeProjectRefereshObs.next()) 
}


export const CreativeProjectRefereshObs = refreshObs()
