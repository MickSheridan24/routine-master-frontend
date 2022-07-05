import { IFund } from "../../../types/FinanceTypes";
import HealthBar from "../../Shared/HealthBar";
import { deleteFund } from "../FinanceService";

export default function Fund(props: {fund: IFund}){
    const {fund} = props
    return <div className="finance-item-container">
        <div className="info">
            <h4 className="name">{fund.name} - ${fund.amount}</h4>
            <div className="goal">${fund.amount} / ${fund.goal}</div>
            
            <HealthBar amount={fund.amount} total={fund.goal} redOn="Low"></HealthBar>
        </div>
        <div className="tools">
            <div className="delete" onClick={() => deleteFund(fund.id!)}>X</div>
        </div>
    </div>
}