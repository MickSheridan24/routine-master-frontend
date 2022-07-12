import { useEffect, useState } from "react"
import { IBudget, IExpenseEntry, ITag } from "../../../types/FinanceTypes"
import Dropdown from "../../Shared/Dropdown"
import Pill from "../../Shared/Pill"
import { createExpense, updateExpense } from "../FinanceService"

export default function ExpenseForm(props: {onCancel?: () => void, budgets: IBudget[], existingTags: ITag[], expense?: IExpenseEntry}){
    const {budgets, existingTags, expense, onCancel} = props

    const [name, setName] = useState(expense?.name ?? "")
    const [amount, setAmount] = useState(expense?.amount ?? 0.0)
    const [budgetId, setBudgetId] = useState<number | undefined>(expense?.budgetId)
    const [tags, setTags] = useState<ITag[]>(expense?.tags ?? [])

    const [newTag, setNewTag] = useState("")



    const getTagOptions = () => existingTags.filter(t => t.name.startsWith(newTag)).map(tag => {
        return {label: tag.name, key: tag.id!}
    })

    const addTag = (tag: ITag) => {
        if(!tags.find(t => t.name === tag.name)){
            const updatedTags = Array.from(new Set([...tags, tag]))
            setTags(updatedTags)
            setNewTag("")
        }
    }

    const removeTag = (tag: ITag) => {
        setTags(tags.filter(t => t !== tag))
    }


    return <div className="finance-form">
        <div className="form">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={(e) => setName(e.target.value)} value = {name} />

            <label htmlFor="amount">Amount</label>
            <input id="amount" type="number" step="0.01" onChange={(e) => setAmount(parseFloat(e.target.value))} value = {amount} />
            
            <label htmlFor="budget">Budget</label>
            <select name="Budget" id="budget" value={budgetId} onChange={(e) => {
                setBudgetId(parseInt(e.target.value))}}>
                <option key="Unassigned" value={undefined} defaultChecked >Unassigned</option>
                {budgets.map(b => <option value={b.id} key={b.id}>{b.name}</option>)}
            </select>
            

            <label htmlFor="tag">Tags</label>
            
            <input type="text" onKeyDown={(e) => {
                    console.log(e.key)
                if(e.key === "Enter"){
                    addTag({name: newTag})}
                }
              }  value={newTag} onChange={(e) => setNewTag(e.target.value)} placeholder="New Tag"/>
            
            {newTag && getTagOptions().length ? <> 
                <Dropdown onClick={(e) => addTag(existingTags.find(et => et.id === e)!)} options={getTagOptions()}></Dropdown>
            </> : <></>}
            <div className="pills">
                {tags.map(t => <Pill label={t.name} onClick={() => removeTag(t)}></Pill>)}
            </div>
            <div className="submit">
                
                {expense && onCancel ? <button onClick={() => {
                updateExpense({id: expense.id!, amount, budgetId, name, tags:[...tags]})
                onCancel!()
                }}>Update Expense</button>
                : <button onClick={() => createExpense({name, amount, budgetId, tags:[...tags]})}>Enter Expense</button>}
            </div>
        </div>
        <div className="tools">
            {onCancel ? <div onClick={onCancel}className="cancel">Cancel</div> : <></>}
        </div>
    </div>
}
