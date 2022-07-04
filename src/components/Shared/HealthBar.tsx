export default function HealthBar(props: {total: number, amount: number, redOnLow: boolean}){
    const {total, amount, redOnLow} = props

    const getIsRed = () =>{
        
        if(redOnLow){
            return  total - amount < total * 0.15 ? "red" : "green"
        }
        else{
            if(amount === total) return ""
            return amount > total * 0.85 ? "red" : "green"
        }
    }


    return <div className={getIsRed()}>
        <progress value={amount} max={total}></progress>
    </div>
}