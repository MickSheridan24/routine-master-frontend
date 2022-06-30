import { IExpenseEntry } from "../../../types/FinanceTypes";
import { formatDate } from "../../../utilities/DateHelpers";
import { deleteExpense } from "../FinanceService";

export default function ExpenseEntry(props: {entry: IExpenseEntry}){
    const{entry} = props 

    return <div className="finance-item-container">
        <div className="info">
            <div className="date">{formatDate(entry.date!)}</div>
            <div className="name">{entry.name + (entry.budgetName ? " (" + entry.budgetName + ")" : "")}
            </div>
            <div className="amount">${entry.amount}</div>
        </div>
        <div className="tools">
            <div className="delete" onClick={() => deleteExpense(entry.id!)}>X</div>
        </div>
    </div>
}