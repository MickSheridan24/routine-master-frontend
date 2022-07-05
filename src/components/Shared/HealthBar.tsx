export default function HealthBar(props: {total: number, amount: number, redOn: "Low" | "High" | "None"}){
    const {total, amount, redOn} = props

    const getIsRed = () =>{
        
        if(redOn === "Low"){
            return  total - amount < total * 0.15 ? "red" : "green"
        }
        else if (redOn === "High"){
            if(amount === total) return ""
            return amount > total * 0.85 ? "red" : "green"
        }
        else{
            return "green"
        }
    }


    return <div className={getIsRed()}>
        <progress value={amount} max={total}></progress>
    </div>
}