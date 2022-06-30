export interface IBudget{
    id?: number,
    name: string,
    amount: number,
    savingsAccountId?: number,
    created?: string,
    spent?: number
}

export interface IExpenseEntry{
    id?: number,
    date?: string,
    budgetId?: number,
    amount: number,
    name: string,
    budgetName?: string
}


export interface IFund{
    id?: number,
    amount: number,
    goal: number,
    name: string
}