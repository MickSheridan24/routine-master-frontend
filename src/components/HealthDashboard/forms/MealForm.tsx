import { useState } from "react";
import { logMeal } from "../HealthService";

export default function MealForm(props: {mealType: "Breakfast" | "Lunch" | "Dinner" | "Snacks"}){

    const {mealType} = props

    const [rating, setRating] = useState(0)
    
    return <div className="dash-item-form">
        <div className="name">{props.mealType}</div>

        <input value={rating} onChange={(e) => setRating(parseInt(e.target.value))} type="number" placeholder="Enter Rating..." min={0} max={10}/>
        <button onClick={() => logMeal({mealType,rating})}>Submit</button>
    </div>

}