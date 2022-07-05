import { BASE_ADDRESS } from "../../Constants";
import { refreshObs } from "../../types/ApiTypes";
import { IBudget, IExpenseEntry, IFund } from "../../types/FinanceTypes";


export function createBudget(value: IBudget){
    fetch(BASE_ADDRESS + "budgets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => {
        budgetRefreshObs.next()
        userIncomeRefreshObs.next()
    })
}

export function updateBudget(value: IBudget){
    fetch(BASE_ADDRESS + "budgets/" + value.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => {
        budgetRefreshObs.next()
        userIncomeRefreshObs.next()
    })
}

export function createExpense(value: IExpenseEntry){
    fetch(BASE_ADDRESS + "expenses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => {
        budgetRefreshObs.next()
        expensesRefreshObs.next()
        userIncomeRefreshObs.next()
    })
}


export function createFund(value: IFund){
    fetch(BASE_ADDRESS + "funds", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => fundsRefreshObs.next())
}


export function deleteExpense(id: number){
    fetch(BASE_ADDRESS + "expenses/" + id, {
        method: "DELETE"
    }).then(() => {
        budgetRefreshObs.next()
        expensesRefreshObs.next()
        userIncomeRefreshObs.next()
    })
}


export function deleteFund(id: number){
    fetch(BASE_ADDRESS + "funds/" + id, {
        method: "DELETE"
    }).then(() => fundsRefreshObs.next())
}


export function deleteBudget(id: number){
    fetch(BASE_ADDRESS + "budgets/" + id, {
        method: "DELETE"
    }).then(() =>{
         budgetRefreshObs.next()
        userIncomeRefreshObs.next()
    })
    }

export const budgetRefreshObs = refreshObs()

export const expensesRefreshObs = refreshObs()

export const fundsRefreshObs = refreshObs()

export const userIncomeRefreshObs = refreshObs()