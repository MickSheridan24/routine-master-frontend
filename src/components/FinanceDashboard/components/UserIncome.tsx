import { useEffect, useState } from "react";
import { IUserIncome } from "../../../types/FinanceTypes";

export default function UserIncome(props: {userIncome: IUserIncome}){

    const [showInfo, setShowInfo] = useState(false)

    const {userIncome} = props

    useEffect(()=> console.log(showInfo), [showInfo])

    return <div className="finance-item-container">
        <div className="info">
            <h4>Income Info  <div className="expand-collapse" onClick={() => setShowInfo(!showInfo)}>{showInfo ? "v" : ">" }</div></h4>
            { showInfo ? <><label htmlFor="income">Income</label>
            <div id="income">${userIncome.amount}</div>
            <label htmlFor="surplus">Incidental Bonus</label>
            <div id="surplus">${userIncome.incidentalBonus}</div>

            <label htmlFor="remaining">Remaining This Month</label>
            <div id="remaining">${userIncome.remaining}</div>

            <label htmlFor="unbudgeted">Unbudgeted</label>
            <div id="unbudgeted">${userIncome.amount - userIncome.budgeted}</div></> : <></>}
     </div>
    </div>
}