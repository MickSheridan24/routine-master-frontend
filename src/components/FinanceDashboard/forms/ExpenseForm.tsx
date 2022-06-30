import { useState } from "react"
import { createExpense } from "../FinanceService"

export default function ExpenseForm(){

    const [name, setName] = useState("")
    const [amount, setAmount] = useState(0.00)

    return <div className="fund-form">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onChange={(e) => setName(e.target.value)} value = {name} />

        <label htmlFor="amount">Amount</label>
        <input id="amount" type="number" step="0.01" onChange={(e) => setAmount(parseFloat(e.target.value))} value = {amount} />
        

        <button onClick={() => createExpense({name, amount})}>Enter</button>
    </div>
}
