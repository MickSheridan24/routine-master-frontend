import { IFund } from "../../../types/FinanceTypes";
import { deleteFund } from "../FinanceService";

export default function Fund(props: {fund: IFund}){
    const {fund} = props
    return <div className="finance-item-container">
        <div className="info">
            <div className="name">{fund.name}</div>
            <div className="amount">{fund.amount}</div>
            <div className="goal">{fund.goal}</div>
        </div>
        <div className="tools">
            <div className="delete" onClick={() => deleteFund(fund.id!)}>X</div>
        </div>
    </div>
}