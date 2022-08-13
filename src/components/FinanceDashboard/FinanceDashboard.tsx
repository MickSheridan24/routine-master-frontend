import { useEffect, useState } from "react";
import { useResource } from "../../hooks/resourceHooks";
import { IBudget, IExpenseEntry, IFinanceSummary, IFund, ITag, IUserIncome } from "../../types/FinanceTypes";
import Budget from "./components/Budget";
import ExpenseEntry from "./components/ExpenseEntry";
import Fund from "./components/Fund";
import { budgetRefreshObs, expensesRefreshDeepObs, expensesRefreshObs, fundsRefreshObs, userIncomeRefreshObs } from "./FinanceService";
import BudgetForm from "./forms/BudgetForm";
import ExpenseForm from "./forms/ExpenseForm";
import FundForm from "./forms/FundForm";
import "./FinanceStyles.css"
import { BASE_ADDRESS } from "../../Constants";
import UserIncome from "./components/UserIncome";
import Pill from "../Shared/Pill";
import Dropdown from "../Shared/Dropdown";
import Graph, { GraphProps } from "../Shared/Graph";

export default function FinanceDashboard(){

    const[budgets, setBudgets] = useResource<IBudget>("budgets", budgetRefreshObs)
    const[expenses, setExpenses] = useResource<IExpenseEntry>("expenses", expensesRefreshObs)
    const[funds, setFunds] = useResource<IFund>("funds", fundsRefreshObs)
    const [selectedBudget, setSelectedBudget] = useState<IBudget | undefined>(undefined)
    const [selectedTag, setSelectedTag] = useState<ITag>()
    const [selectedTagSearch, setSelectedTagSearch] = useState("")
    const [deepRefreshExpenses, setDeepRefreshExpenses] = useState(false)

    const [showGraph, setShowGraph] = useState(true)

    const [userIncome, setUserIncome] = useState<IUserIncome>()

    const [userFinanceSummary, setUserFinanceSummary] = useState<IFinanceSummary[]>([])

    const [refreshIncome, setRefreshIncome] = useState(false)

    userIncomeRefreshObs.subscribe(() => setRefreshIncome(true))
    
    useEffect(() => {
        setDeepRefreshExpenses(false)
        fetch(BASE_ADDRESS + "expenses")
        .then(r => r.json())
        .then(r => setExpenses([...r]))
    }, [deepRefreshExpenses] )

    expensesRefreshDeepObs.subscribe(() => setDeepRefreshExpenses(true))


    useEffect(() => {
        setRefreshIncome(false)
        fetch(BASE_ADDRESS + "userIncome")
        .then(r => r.json()
        .then(setUserIncome))
    },[refreshIncome])

    useEffect(() => {
        setRefreshIncome(false)
        fetch(BASE_ADDRESS + "financeSummary")
        .then(r => r.json()
        .then(r => {
            console.log(r)
            return r
        })
        .then(setUserFinanceSummary))
    },[deepRefreshExpenses])


    const getTotal = () => {
        return expenses.filter(e=> 
            (!selectedBudget || e.budgetId == selectedBudget.id) &&
            (!selectedTag || e.tags?.find(t => t.id === selectedTag.id) ))
                       .reduce((m, e) => m + e.amount, 0)
    }

    const getExpenseHeader = () => {
        if(selectedBudget && selectedTag) return `Expenses - ${selectedBudget.name}, ${selectedTag.name}`
        if(selectedBudget) return `Expenses - ${selectedBudget.name}`
        if(selectedTag) return `Expenses - ${selectedTag.name}`
        return "Expenses"
    }

    const getFinanceGraphData= () => {
        
        const average = userFinanceSummary.map((s, i) => {
            return {x: i + 1, y: s.average}
        })
        const present = userFinanceSummary.map((s, i) => {
            return {x: i + 1, y: s.present}
        })
        const lastMonth = userFinanceSummary.map((s, i) => {
            return {x: i + 1, y: s.lastMonth}
        })
        return [ {name: "Present Month", color: "#337733 ", data: present},
                {name: "Last Month",color: "#447777" ,  data: lastMonth},
                {name: "Average", color: "#773333", data: average}, 
            ]   
    }

    const getExistingTags = () =>  expenses.map(e => e.tags ?? []).flat()
    

    return <div className="dashboard-container finance-theme">
        <div className="dashboard-column">
            <div className="header">
                <h3>{getExpenseHeader()}</h3>
                {selectedBudget ? <Pill onClick={() => setSelectedBudget(undefined)} label={selectedBudget.name}></Pill> : <></>}
                {selectedTag ? <Pill onClick={() => setSelectedTag(undefined)} label={selectedTag.name}></Pill> : <></>}
            </div>
            <em>${getTotal().toFixed(2)} spent this month</em>
            <ExpenseForm existingTags={getExistingTags()} budgets={budgets}></ExpenseForm>
            <div className="tag-filter">
                <input 
                    onChange={(e) => setSelectedTagSearch(e.target.value)}
                    value={selectedTagSearch}
                    type="text" 
                    placeholder="Filter By Tag..." />

                <Dropdown 
                onClick={(id) => {
                    setSelectedTag(getExistingTags().find(t => t.id! === id))
                    setSelectedTagSearch("")
                }}
                options={getExistingTags()
                    .filter(t => selectedTagSearch && t.name.startsWith(selectedTagSearch))
                    .map(t => {
                    return {label: t.name, key: t.id!}
                })} ></Dropdown>
            </div>
            <div className="dash-list">
            {expenses
            .filter(e => (!selectedBudget || e.budgetId == selectedBudget.id!) &&
            (!selectedTag || e.tags?.find(t => t.id === selectedTag.id)))
            .map(e => <ExpenseEntry existingTags={getExistingTags()} 
                                    budgets={budgets} key={e.id} 
                                    entry={e}></ExpenseEntry>)}
            </div>
        </div>
        <hr />
        <div className="dashboard-column">
            <div className="header">
                <h3>Budgets</h3>
            </div>
            {userIncome ? <UserIncome userIncome={userIncome}></UserIncome> : <></> }
            <BudgetForm funds={funds}></BudgetForm>
            <div className="dash-list">
             {budgets
             .map(b => <Budget funds={funds} key={b.id} selectBudget={setSelectedBudget} budget={b}></Budget>)}
            </div>     
        </div>
        <hr />

        <div className="dashboard-column">
            
            <button style = {{marginBottom: "8px"}} className="dash-button" onClick={(e) => setShowGraph(!showGraph)}>{showGraph ? "Hide Graph" : "Show Expense Graph"}</button>
            {showGraph && <Graph lines={getFinanceGraphData()}></Graph> }
            <div className="header">
                <h3>Funds</h3>
             </div>
            <FundForm></FundForm>
            {funds.map(f => <Fund key={f.id} fund={f}></Fund>)}

        </div>
    </div>
}