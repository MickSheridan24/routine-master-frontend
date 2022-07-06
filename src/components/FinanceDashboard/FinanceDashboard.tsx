import { useEffect, useState } from "react";
import { useResource } from "../../hooks/resourceHooks";
import { IBudget, IExpenseEntry, IFund, IUserIncome } from "../../types/FinanceTypes";
import Budget from "./components/Budget";
import ExpenseEntry from "./components/ExpenseEntry";
import Fund from "./components/Fund";
import { budgetRefreshObs, expensesRefreshObs, fundsRefreshObs, userIncomeRefreshObs } from "./FinanceService";
import BudgetForm from "./forms/BudgetForm";
import ExpenseForm from "./forms/ExpenseForm";
import FundForm from "./forms/FundForm";
import "./FinanceStyles.css"
import { BASE_ADDRESS } from "../../Constants";
import UserIncome from "./components/UserIncome";

export default function FinanceDashboard(){

    const[budgets, setBudgets] = useResource<IBudget>("budgets", budgetRefreshObs)
    const[expenses, setExpenses] = useResource<IExpenseEntry>("expenses", expensesRefreshObs)
    const[funds, setFunds] = useResource<IFund>("funds", fundsRefreshObs)
    const [selectedBudget, setSelectedBudget] = useState<IBudget | undefined>(undefined)

    const [userIncome, setUserIncome] = useState<IUserIncome>()

    const [refreshIncome, setRefreshIncome] = useState(false)

    userIncomeRefreshObs.subscribe(() => setRefreshIncome(true))

    useEffect(() => {
        setRefreshIncome(false)
        fetch(BASE_ADDRESS + "userIncome")
        .then(r => r.json()
        .then(setUserIncome))
    },[refreshIncome])

    return <div className="dashboard-container">
        <div className="dashboard-column">
            <div className="header">
                <h3>Expenses</h3>
                {selectedBudget ? <div onClick={() => setSelectedBudget(undefined)} className="filter">{selectedBudget.name} X</div> : <></>}
            </div>
            <div className="dash-list">
            {expenses
            .filter(e => !selectedBudget || e.budgetId == selectedBudget.id!)
            .map(e => <ExpenseEntry key={e.id} entry={e}></ExpenseEntry>)}
            </div>
            <ExpenseForm budgets={budgets}></ExpenseForm>
        </div>
        <hr />
        <div className="dashboard-column">
            <h3>Budgets</h3>
            {userIncome ? <UserIncome userIncome={userIncome}></UserIncome> : <></> }
            <div className="dash-list">
             {budgets
             .map(b => <Budget funds={funds} key={b.id} selectBudget={setSelectedBudget} budget={b}></Budget>)}
            </div>
            <BudgetForm funds={funds}></BudgetForm>
        </div>
        <hr />

        <div className="dashboard-column">
            <h3>Funds</h3>
            {funds.map(f => <Fund key={f.id} fund={f}></Fund>)}
            <FundForm></FundForm>
        </div>
    </div>
}