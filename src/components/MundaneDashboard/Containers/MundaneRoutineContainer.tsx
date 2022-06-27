import { useContext } from "react";
import { MundaneRoutineContext } from "../../../contexts/MundaneContexts";
import MundaneRoutine from "../Components/MundaneRoutine";

export default function MundaneRoutineContainer(){
    const routines = useContext(MundaneRoutineContext).get;
    return <div> 
            {routines.map( routine => <MundaneRoutine key={routine.id} routine={routine}></MundaneRoutine>)}
        </div>
}