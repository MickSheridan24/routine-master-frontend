import { useEffect, useState } from "react";
import { getResource } from "../../api/BaseApiUtilities";
import { MundaneListContext,MundaneRoutineContext } from "../../contexts/MundaneContexts";
import { IMundaneList, IMundaneRoutine } from "../../types/MundaneTypes";
import MundaneListContainer from "./Containers/MundaneListContainer";
import MundaneRoutineContainer from "./Containers/MundaneRoutineContainer";
import { mundaneListRefereshObs, mundaneRoutineRefereshObs } from "./MundaneDashboardService";
import "./MundaneDashboardStyles.css"

export default function MundaneDashboard(){

    const [refreshLists, setRefreshLists] = useState(false)
    const [refreshRoutines, setRefreshRoutines] = useState(false)
    const [mundaneLists, setMundaneLists]  = useState<IMundaneList[]>([]);
    const [mundaneRoutines, setMundaneRoutines] = useState<IMundaneRoutine[]>([]);

    mundaneListRefereshObs.subscribe(() => setRefreshLists(true))
    mundaneRoutineRefereshObs.subscribe(() => setRefreshRoutines(true))

    useEffect(() => {
        getResource<IMundaneList>("lists", setMundaneLists)
        setRefreshLists(false)
    }, [refreshLists])


    useEffect(() => {
         getResource<IMundaneRoutine>("routines", setMundaneRoutines)
         setRefreshRoutines(false)
    }, [refreshRoutines])
    

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