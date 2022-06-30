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
    }).then(() => budgetRefreshObs.next())
}

export function createExpense(value: IExpenseEntry){
    fetch(BASE_ADDRESS + "expenses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }).then(() => expensesRefreshObs.next())
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



export const budgetRefreshObs = refreshObs()

export const expensesRefreshObs = refreshObs()

export const fundsRefreshObs = refreshObs()