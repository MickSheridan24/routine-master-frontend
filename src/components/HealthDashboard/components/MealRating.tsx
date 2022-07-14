import { useState } from "react";
import { IMealRating } from "../../../types/HealthTypes";
import HealthBar from "../../Shared/HealthBar";

export default function MealRating(props: {meal: IMealRating}){
    const [isEditing, setIsEditing] = useState(false)


    return isEditing ? <></>
    
    : <div className="dash-item">
        <div className="info">
            <div className="name">{props.meal.mealType} - {props.meal.rating}/10</div>
            <HealthBar amount={props.meal.rating} total={10} redOn="Low"></HealthBar>
        </div>
    </div>
    
    
}