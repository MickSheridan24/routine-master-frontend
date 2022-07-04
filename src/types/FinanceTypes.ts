export interface IBudget{
    id?: number,
    name: string,
    amount: number,
    fundId?: number, 
    fundName?: string,
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


export interface IUserIncome{
    amount: number,
    incidentalBonus: number,
    remaining: number,
    budgeted: number
}