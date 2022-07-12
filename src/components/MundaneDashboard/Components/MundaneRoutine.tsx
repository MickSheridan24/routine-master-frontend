import { IMundaneRoutine } from "../../../types/MundaneTypes";

export default function MundaneRoutine(props: { routine: IMundaneRoutine }) {

    const { routine } = props
    return <div className="dash-item">
            <div className="info">
            <h5>
                {routine.name}
            </h5> 
        </div>
        <div className="tools">
            <div className="check"></div>
        </div>
    </div>
}