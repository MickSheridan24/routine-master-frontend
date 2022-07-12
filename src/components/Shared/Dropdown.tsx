export default function DropDown(props: {onClick: (_:number) => void, options: {label: string, key: number}[]}){

    const unique = props.options.reduce((m, op) => !!m.find(e=> e.key === op.key) ? m : [...m, op], [] as {label: string, key: number}[])


    return unique.length ?  <div className="dropdown-container">
        {unique.map(op => <div key={op.key} onClick={() => props.onClick(op.key)} className="dropdown-option">{op.label}</div>)}
    </div> : <></>
}