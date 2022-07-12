import { useState } from "react";
import { IBudget, IExpenseEntry, ITag } from "../../../types/FinanceTypes";
import { formatDate } from "../../../utilities/DateHelpers";
import { deleteExpense } from "../FinanceService";
import ExpenseForm from "../forms/ExpenseForm";

export default function ExpenseEntry(props: {budgets: IBudget[], existingTags: ITag[], entry: IExpenseEntry}){
    const{entry, budgets, existingTags} = props 
    const [editMode, setEditMode] = useState(false)

    return <>
    { editMode ? <ExpenseForm onCancel={() => setEditMode(false)} expense={entry} existingTags={existingTags} budgets={budgets}></ExpenseForm>
    : <div className="dash-item">
        <div className="info">
            <div className="date">{formatDate(entry.date!)}</div>
            <div className="name">{entry.name + (entry.budgetName ? " (" + entry.budgetName + ")" : "")}
            </div>
            <div className="amount">${entry.amount}</div>

            <div className="tags"><strong><em>{entry.tags?.map(t => t.name + " ") ?? ""}</em></strong></div>
        </div>
        <div className="tools">
            <div className="delete" onClick={() => deleteExpense(entry.id!)}>X</div>
            <div className="edit" onClick={(e) => {
                    e.stopPropagation()
                    setEditMode(true)
                }}>
                    Edit
                </div>
        </div>
    </div> }

    </>
}