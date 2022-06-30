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

export default function FinanceDashboard(){

    const[budgets, setBudgets] = useResource<IBudget>("budgets", budgetRefreshObs)
    const[expenses, setExpenses] = useResource<IExpenseEntry>("expenses", expensesRefreshObs)
    const[funds, setFunds] = useResource<IFund>("funds", fundsRefreshObs)

    return <div className="finances-container">
        <div className="expenses-container">
            {expenses.map(e => <ExpenseEntry key={e.id} entry={e}></ExpenseEntry>)}
            <ExpenseForm></ExpenseForm>
        </div>
        <div className="budgets-container">
            {budgets.map(b => <Budget key={b.id} budget={b}></Budget>)}
            <BudgetForm></BudgetForm>
        </div>

        <div className="funds-container">
            {funds.map(f => <Fund key={f.id} fund={f}></Fund>)}
            <FundForm></FundForm>
        </div>
    </div>
}