import { useState } from "react";
import { MundaneListContext,MundaneRoutineContext } from "../../contexts/MundaneContexts";
import { MockMundaneLists, MockMundaneRoutines } from "../../MockData/MockData";
import MundaneListContainer from "./Containers/MundaneListContainer";
import MundaneRoutineContainer from "./Containers/MundaneRoutineContainer";
import "./MundaneDashboardStyles.css"

export default function MundaneDashboard(){

    const [mundaneLists, setMundaneLists]  = useState(MockMundaneLists);
    const [mundaneRoutines, setMundaneRoutines] = useState(MockMundaneRoutines);


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