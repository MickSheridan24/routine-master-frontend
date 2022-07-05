import { useEffect, useState } from "react"
import { IBudget } from "../../../types/FinanceTypes"
import { createExpense } from "../FinanceService"

export default function ExpenseForm(props: {budgets: IBudget[]}){

    const [name, setName] = useState("")
    const [amount, setAmount] = useState(0.00)
    const [budgetId, setBudgetId] = useState<number | undefined>()

    const {budgets} = props

    useEffect(() => console.log(budgetId), [budgetId])

    return <div className="finance-form">
        <div className="form">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={(e) => setName(e.target.value)} value = {name} />

            <label htmlFor="amount">Amount</label>
            <input id="amount" type="number" step="0.01" onChange={(e) => setAmount(parseFloat(e.target.value))} value = {amount} />
            
            <label htmlFor="budget">Budget</label>
            <select name="Budget" id="budget" value={budgetId} onChange={(e) => {
                console.log(e)
                setBudgetId(parseInt(e.target.value))}}>
                <option key="Unassigned" value={undefined} defaultChecked >Unassigned</option>
                {budgets.map(b => <option value={b.id} key={b.id}>{b.name}</option>)}
            </select>

            <button onClick={() => createExpense({name, amount, budgetId})}>Enter</button>
        </div>
    </div>
}
