import { useEffect, useState } from "react";
import { getResource } from "../../api/BaseApiUtilities";
import { MundaneListContext,MundaneRoutineContext } from "../../contexts/MundaneContexts";
import { useResource } from "../../hooks/resourceHooks";
import { IMundaneList, IMundaneRoutine } from "../../types/MundaneTypes";
import MundaneListContainer from "./Containers/MundaneListContainer";
import MundaneRoutineContainer from "./Containers/MundaneRoutineContainer";
import { mundaneListRefereshObs, mundaneRoutineRefereshObs } from "./MundaneDashboardService";
import "./MundaneDashboardStyles.css"

export default function MundaneDashboard(){

    const [mundaneLists, setMundaneLists] = useResource<IMundaneList>("lists", mundaneListRefereshObs)
    const [mundaneRoutines, setMundaneRoutines]  = useResource<IMundaneRoutine>("routines", mundaneRoutineRefereshObs);


    return <>
            <div className="dashboard-column">
            <MundaneListContext.Provider value={{get: mundaneLists, set: setMundaneLists}}>
                <MundaneListContainer></MundaneListContainer>
            </MundaneListContext.Provider>
            </div>
            <div className="dashboard-column">
            <MundaneRoutineContext.Provider value={{get: mundaneRoutines, set: setMundaneRoutines}}>
                <MundaneRoutineContainer></MundaneRoutineContainer>
            </MundaneRoutineContext.Provider>
            </div>
        </>
}