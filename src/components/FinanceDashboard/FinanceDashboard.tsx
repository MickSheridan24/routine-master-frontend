import { useState } from "react";
import { useResource } from "../../hooks/resourceHooks";
import { IBudget, IExpenseEntry, IFund } from "../../types/FinanceTypes";
import Budget from "./components/Budget";
import ExpenseEntry from "./components/ExpenseEntry";
import Fund from "./components/Fund";
import { budgetRefreshObs, expensesRefreshObs, fundsRefreshObs } from "./FinanceService";
import BudgetForm from "./forms/BudgetForm";
import ExpenseForm from "./forms/ExpenseForm";
import FundForm from "./forms/FundForm";
import "./FinanceStyles.css"

export default function FinanceDashboard(){

    const[budgets, setBudgets] = useResource<IBudget>("budgets", budgetRefreshObs)
    const[expenses, setExpenses] = useResource<IExpenseEntry>("expenses", expensesRefreshObs)
    const[funds, setFunds] = useResource<IFund>("funds", fundsRefreshObs)

    return <div className="finances-container">
        <div className="finance-container">
            <h3>Expenses</h3>
            {expenses.map(e => <ExpenseEntry key={e.id} entry={e}></ExpenseEntry>)}
            <ExpenseForm budgets={budgets}></ExpenseForm>
        </div>
        <hr />
        <div className="finance-container">
            <h3>Budgets</h3>
            {budgets.map(b => <Budget key={b.id} budget={b}></Budget>)}
            <BudgetForm></BudgetForm>
        </div>
        <hr />

        <div className="finance-container">
            <h3>Funds</h3>
            {funds.map(f => <Fund key={f.id} fund={f}></Fund>)}
            <FundForm></FundForm>
        </div>
    </div>
}