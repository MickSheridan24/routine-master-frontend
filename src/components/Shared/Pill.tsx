export default function Pill(props:{label: string, onClick: () => void}){

    return <div onClick={props.onClick} className="pill">
        {props.label} - X
    </div>

}