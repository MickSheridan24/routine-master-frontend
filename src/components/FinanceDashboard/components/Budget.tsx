import { useState } from "react";
import { IBudget, IFund } from "../../../types/FinanceTypes";
import HealthBar from "../../Shared/HealthBar";
import { deleteBudget } from "../FinanceService";
import BudgetForm from "../forms/BudgetForm";

export default function Budget (props: {funds: IFund[], budget: IBudget, selectBudget: (id: IBudget) => void}){
    const {budget, selectBudget, funds}  = props 
    const [editMode, setEditMode] = useState(false)
    return <>

        {editMode ? <BudgetForm onCancel={() => setEditMode(false)} funds={funds} budget={budget}></BudgetForm>
        
        : <div onClick={() => selectBudget(budget)} className="finance-item-container">
            <div className="info">
                <h4 className="name">{budget.name} - ${budget.amount}</h4>
                <div>${budget.spent!} / ${budget.amount - budget.spent!}</div>
                <HealthBar amount={budget.spent!} total={budget.amount} redOn="High"></HealthBar>
                {budget.fundName ? <div>Excess Funds to {budget.fundName}</div> : <></>}
            </div>
            <div className="tools">
                <div className="delete" onClick={(e) => {
                    e.stopPropagation()
                    deleteBudget(budget.id!)}}>X
                </div>
                <div className="edit" onClick={(e) => {
                    e.stopPropagation()
                    setEditMode(true)
                }}>
                    Edit
                </div>
            </div>
        </div>}
    </>
}