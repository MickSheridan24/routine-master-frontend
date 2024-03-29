import { useState } from "react"
import { createFund } from "../FinanceService"

export default function FundForm(){

    const [name, setName] = useState("")
    const [amount, setAmount] = useState(0.00)
    const [goal, setGoal] = useState(0.00)

    const submitForm = () => {
        createFund({name, amount: amount, goal: goal})
        setName("")
        setAmount(0 )
        setGoal(0)
    }

    return <div className="dash-item-form">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={(e) => setName(e.target.value)} value = {name} />

            <label htmlFor="amount">Starting Amount</label>
            <input id="amount" type="number" min={0.00} step={0.01} onChange={(e) => setAmount(parseFloat(e.target.value))} value = {amount} />

            <label htmlFor="name">Goal</label>
            <input id="goal" type="number" min={0.00} step={0.01} onChange={(e) => {setGoal(parseFloat(e.target.value))}} value = {goal} />

            <button onClick={() => submitForm()}>Create</button>
    </div>
}