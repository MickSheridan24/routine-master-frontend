import { useState } from "react"
import { IFund } from "../../../types/FinanceTypes"
import { createBudget } from "../FinanceService"

export default function BudgetForm(props: {funds: IFund[]}){

    const [name, setName] = useState("")
    const [amount, setAmount] = useState(0.00)
    const [fundId, setFundId] = useState<number | undefined>(undefined)

    return <div className="finance-form">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onChange={(e) => setName(e.target.value)} value = {name} />

        <label htmlFor="amount">Budgeted Amount</label>
        <input id="amount" type="number" step="0.01" onChange={(e) => setAmount(parseFloat(e.target.value))} value = {amount} />


        <label htmlFor="budget">Surplus To Fund</label>
        <select name="Budget" id="budget" value={fundId} onChange={(e) => {
            setFundId(parseInt(e.target.value))}}>
            <option key="Unassigned" value={undefined} defaultChecked >Unassigned</option>
            {props.funds.map(b => <option value={b.id} key={b.id}>{b.name}</option>)}
        </select>

        <button onClick={() => createBudget({name, amount, fundId})}>Create</button>
    </div>
}