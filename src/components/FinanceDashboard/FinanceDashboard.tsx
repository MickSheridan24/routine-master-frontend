import { useEffect, useState } from "react";
import { useResource } from "../../hooks/resourceHooks";
import { IBudget, IExpenseEntry, IFund, IUserIncome } from "../../types/FinanceTypes";
import Budget from "./components/Budget";
import ExpenseEntry from "./components/ExpenseEntry";
import Fund from "./components/Fund";
import { budgetRefreshObs, expensesRefreshObs, fundsRefreshObs } from "./FinanceService";
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

    useEffect(() => {
        fetch(BASE_ADDRESS + "userIncome")
        .then(r => r.json()
        .then(setUserIncome))
    },[])

    return <div className="finances-container">
        <div className="finance-container">
            <div className="header">
                <h3>Expenses</h3>
                {selectedBudget ? <div onClick={() => setSelectedBudget(undefined)} className="filter">{selectedBudget.name} X</div> : <></>}
            </div>
            {expenses
            .filter(e => !selectedBudget || e.budgetId == selectedBudget.id!)
            .map(e => <ExpenseEntry key={e.id} entry={e}></ExpenseEntry>)}
            <ExpenseForm budgets={budgets}></ExpenseForm>
        </div>
        <hr />
        <div className="finance-container">
            <h3>Budgets</h3>
            {userIncome ? <UserIncome userIncome={userIncome}></UserIncome> : <></> }

            {budgets.map(b => <Budget key={b.id} selectBudget={setSelectedBudget} budget={b}></Budget>)}
            <BudgetForm funds={funds}></BudgetForm>
        </div>
        <hr />

        <div className="finance-container">
            <h3>Funds</h3>
            {funds.map(f => <Fund key={f.id} fund={f}></Fund>)}
            <FundForm></FundForm>
        </div>
    </div>
}