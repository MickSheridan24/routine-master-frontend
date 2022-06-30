import { IBudget } from "../../../types/FinanceTypes";
import HealthBar from "../../Shared/HealthBar";
import { deleteBudget } from "../FinanceService";

export default function Budget (props: {budget: IBudget}){
    const {budget}  = props 

    return <div className="finance-item-container">
        <div className="info">
            <h4 className="name">{budget.name} - ${budget.amount}</h4>
            <div>${budget.spent!} - ${budget.amount - budget.spent!}</div>
            <HealthBar amount={budget.spent!} total={budget.amount} redOnLow={false}></HealthBar>
        </div>
        <div className="tools">
            <div className="delete" onClick={() => deleteBudget(budget.id!)}>X</div>
        </div>
    
    </div>
}