import { useState } from "react"
import { IBudget, IFund } from "../../../types/FinanceTypes"
import { createBudget, updateBudget } from "../FinanceService"

export default function BudgetForm(props: {funds: IFund[], budget?: IBudget, onCancel?: () => void}){

    const {funds, budget, onCancel} = props;
    const [name, setName] = useState(budget?.name ?? "")
    const [amount, setAmount] = useState(budget?.amount ?? 0.00)
    const [fundId, setFundId] = useState<number | undefined>(budget?.fundId ?? undefined)

    return <div className="finance-form">
        <div className="form">
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

            {budget && onCancel ? <button onClick={() => {
                updateBudget({id:budget.id!, name: name, amount: amount, fundId: fundId})
                onCancel!()
                }}>Update</button>
            :<button onClick={() => {
                createBudget({name, amount, fundId})
                }}>Create</button>}
            </div>
        <div className="tools">
                {onCancel ? <div onClick={onCancel}className="cancel">Cancel</div> : <></>}
        </div>
    </div>
}