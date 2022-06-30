import { IFund } from "../../../types/FinanceTypes";

export default function Fund(props: {fund: IFund}){
    const {fund} = props
    return <div className="fund-container">
        <div className="name">{fund.name}</div>
        <div className="amount">{fund.amount}</div>
        <div className="goal">{fund.goal}</div>
    </div>
}