import { Dispatch, SetStateAction , createContext} from "react";

export interface ApiResourceContext<T> {
    get: T[],
    set: Dispatch<SetStateAction<T[]>>,
}

export function createApiResourceContext<T>(){
    return createContext<ApiResourceContext<T>>({get: [], set: ()=> {}})
}



export function refreshObs(){
    return {
        _subscriptions: [] as (() => void)[],
        subscribe: function(cb: () => void){
            this._subscriptions.push(cb)
        },
        next: function(){
            this._subscriptions.forEach(cb => {
                cb()
            });
        }
    
    }
}