import { Dispatch, SetStateAction , createContext} from "react";

export interface ApiResourceContext<T> {
    get: T[],
    set: Dispatch<SetStateAction<T[]>>,
    create?: (_:T) => void,
    update?: (_:T) => void,
    delete?: (_:number) => void
}

export function createApiResourceContext<T>(){
    return createContext<ApiResourceContext<T>>({get: [], set: ()=> {} , create: (_: T) => {}, update: (_: T) => {}, delete: (_: number) => {}})
}

