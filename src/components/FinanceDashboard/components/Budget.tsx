import { IBudget } from "../../../types/FinanceTypes";
import HealthBar from "../../Shared/HealthBar";
import { deleteBudget } from "../FinanceService";

export default function Budget (props: {budget: IBudget, selectBudget: (id: IBudget) => void}){
    const {budget, selectBudget}  = props 

    return <div onClick={() => selectBudget(budget)} className="finance-item-container">
        <div className="info">
            <h4 className="name">{budget.name} - ${budget.amount}</h4>
            <div>${budget.spent!} / ${budget.amount - budget.spent!}</div>
            <HealthBar amount={budget.spent!} total={budget.amount} redOnLow={false}></HealthBar>
            {budget.fundName ? <div>Excess Funds to {budget.fundName}</div> : <></>}
        </div>
        <div className="tools">
            <div className="delete" onClick={(e) => {
                e.stopPropagation()
                deleteBudget(budget.id!)}}>X
            </div>
        </div>
    </div>
}