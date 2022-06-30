export default function HealthBar(props: {total: number, amount: number, redOnLow: boolean}){
    const {total, amount, redOnLow} = props

    const getIsRed = () =>{
        
        if(redOnLow){
            return  total - amount < total * 0.15 ? "red" : "green"
        }
        else{
            console.log(amount, total * 0.85)
            return amount > total * 0.85 ? "red" : "green"
        }
    }

    console.log(getIsRed())

    return <div className={getIsRed()}>
        <progress value={amount} max={total}></progress>
    </div>
}