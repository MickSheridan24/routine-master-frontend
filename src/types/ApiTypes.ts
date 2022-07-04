import { Dispatch, SetStateAction , createContext} from "react";

export interface ApiResourceContext<T> {
    get: T[],
    set: Dispatch<SetStateAction<T[]>>,
}

export function createApiResourceContext<T>(){
    return createContext<ApiResourceContext<T>>({get: [], set: ()=> {}})
}


export interface IObservable{
    _subscriptions: (() => void)[],
    subscribe: (cb: () => void) => void,
    next: () => void 
}

export function refreshObs(){
    return {
        _subscriptions: [] as (() => void)[],
        subscribe: function(cb: () => void){
            this._subscriptions.push(cb)
        },
        next: function(){
            console.log("NEXT")
            this._subscriptions.forEach(cb => {
                cb()
            });
        }
    
    }
}