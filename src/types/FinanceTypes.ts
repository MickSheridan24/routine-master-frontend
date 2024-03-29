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
    budgetName?: string,
    tags?: ITag[]
}

export interface ITag{
    name: string,
    id?: number
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

export interface IFinanceSummary{
    present: number, 
    lastMonth: number, 
    average: number
}