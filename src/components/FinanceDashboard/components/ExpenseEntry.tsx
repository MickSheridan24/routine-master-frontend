import { IExpenseEntry } from "../../../types/FinanceTypes";

export default function ExpenseEntry(props: {entry: IExpenseEntry}){
    const{entry} = props 

    return <div className="expense-entry-container">
        <div className="name">{entry.name}</div>
        <div className="amount">{entry.amount}</div>
        <div className="budget-name">{!!entry.budget ?  entry.budget!.name : "No Budget Assigned"}</div> 
    </div>
}