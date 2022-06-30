import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getResource } from "../api/BaseApiUtilities";
import { IObservable } from "../types/ApiTypes";

export function useResource<T>(apiLabel: string, obs:IObservable ){
   const [resource, setResource] = useState<T[]>([])
   const [refreshResource, setRefreshResource] = useState(false)

   obs.subscribe(() => setRefreshResource(true))

   useEffect(() => {
       setRefreshResource(false)
       getResource<T>(apiLabel, setResource)
   }, [refreshResource])

   return [resource, setResource] as [T[],  Dispatch<SetStateAction<T[]>>]
}