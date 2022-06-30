export interface IBudget{
    id?: number,
    name: string,
    amount: number,
    savingsAccountId?: number,
    created?: Date,
    expenses: IExpenseEntry[]
}

export interface IExpenseEntry{
    id?: number,
    date?: Date,
    budgetId?: number,
    amount: number,
    name: string,
    budget?: IBudget
}


export interface IFund{
    id?: number,
    amount: number,
    goal: number,
    name: string
}