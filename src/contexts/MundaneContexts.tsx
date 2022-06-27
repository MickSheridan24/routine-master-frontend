import { createContext, Dispatch, SetStateAction } from "react";
import { IMundaneList, IMundaneRoutine } from "../types/MundaneTypes";


export const MundaneListContext = createContext<{get: IMundaneList[], set: Dispatch<SetStateAction<IMundaneList[]>>}>({get: [], set: () => {}})

export const MundaneRoutineContext = createContext<{get: IMundaneRoutine[], set: Dispatch<SetStateAction<IMundaneRoutine[]>>}>({get: [], set: () => {}})