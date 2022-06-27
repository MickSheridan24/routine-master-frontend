import { IMundaneRoutine } from "../../../types/MundaneTypes";

export default function MundaneRoutine(props: { routine: IMundaneRoutine }) {

    const { routine } = props
    return <div className="mundane-routine">
        <h5>
            {routine.name}
        </h5> 
    </div>
}