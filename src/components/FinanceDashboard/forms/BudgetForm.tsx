import { useState } from "react"
import { createBudget } from "../FinanceService"

export default function BudgetForm(){

    const [name, setName] = useState("")
    const [amount, setAmount] = useState(0.00)

    return <div className="finance-form">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onChange={(e) => setName(e.target.value)} value = {name} />

        <label htmlFor="amount">Budgeted Amount</label>
        <input id="amount" type="number" step="0.01" onChange={(e) => setAmount(parseFloat(e.target.value))} value = {amount} />


        <button onClick={() => createBudget({name, amount, expenses: []})}>Create</button>
    </div>
}