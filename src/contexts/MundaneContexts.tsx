import { createApiResourceContext } from "../types/ApiTypes";
import { IMundaneList, IMundaneRoutine } from "../types/MundaneTypes";


export const MundaneListContext = createApiResourceContext<IMundaneList>()

export const MundaneRoutineContext = createApiResourceContext<IMundaneRoutine>()

