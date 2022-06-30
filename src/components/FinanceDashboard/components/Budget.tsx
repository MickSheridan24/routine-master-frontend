import { IBudget } from "../../../types/FinanceTypes";

export default function Budget (props: {budget: IBudget}){
    const {budget}  = props 

    return <div className="budget-container">
        <div className="name">{budget.name}</div>
        <div className="amount">{budget.amount}</div>
    </div>
}