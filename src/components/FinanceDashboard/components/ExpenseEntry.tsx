import { IExpenseEntry } from "../../../types/FinanceTypes";
import { deleteExpense } from "../FinanceService";

export default function ExpenseEntry(props: {entry: IExpenseEntry}){
    const{entry} = props 

    return <div className="finance-item-container">
        <div className="info">
        <div className="name">{entry.name}</div>
        <div className="amount">${entry.amount}</div>
        <div className="budget-name">{!!entry.budget ?  entry.budget!.name : "No Budget Assigned"}</div> 
        </div>
        <div className="tools">
            <div onClick={() => deleteExpense(entry.id!)}>X</div>
        </div>
    </div>
}