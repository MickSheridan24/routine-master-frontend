import { useResource } from "../../hooks/resourceHooks"
import { IExerciseEntry, IExerciseRoutine, IMealRating } from "../../types/HealthTypes"
import ExerciseRoutine from "./components/ExerciseRoutine"
import MealRating from "./components/MealRating"
import ExerciseRoutineForm from "./forms/ExerciseRoutineForm"
import MealForm from "./forms/MealForm"
import { exerciseEntriesRefreshObs, exerciseRefreshObs, mealsRefreshObs } from "./HealthService"
import "./HealthStyles.css"

export default function HealthDashboard(){

    const [meals, setMeals] = useResource<IMealRating>("meals", mealsRefreshObs)
    const [exercises, setExercises] = useResource<IExerciseRoutine>("exerciseRoutines", exerciseRefreshObs)
    const [exerciseEntries, setExerciseEntries] = useResource<IExerciseEntry>("exerciseRoutines/entries", exerciseEntriesRefreshObs)

    const breakfast = meals.find(m => m.mealType === "Breakfast")
    const lunch = meals.find(m => m.mealType === "Lunch")
    const dinner = meals.find(m => m.mealType === "Dinner")
    const snacks = meals.find(m => m.mealType === "Snacks")

    return <div className="dashboard-container health-theme">

        <div className="dashboard-column">
            <div className="header">
                <h3>Diet</h3>
            </div>
             
            {breakfast ? 
                <MealRating meal = {breakfast}></MealRating>
                : <MealForm mealType="Breakfast"></MealForm>
            }

            {lunch ? 
                <MealRating meal = {lunch}></MealRating>
                : <MealForm mealType="Lunch"></MealForm>
            }

            {dinner ? 
                <MealRating meal = {dinner}></MealRating>
                : <MealForm mealType="Dinner"></MealForm>
            }

            {snacks ? 
                <MealRating meal = {snacks}></MealRating>
                : <MealForm mealType="Snacks"></MealForm>
            }


            
        </div>
        <hr />
        <div className="dashboard-column">
            <div className="header">
                <h3>Exercise</h3>
            </div>

            <ExerciseRoutineForm></ExerciseRoutineForm>
            <div className="dash-list">
                {exercises.map(e => <ExerciseRoutine key={e.id} routine={e} entries={exerciseEntries.filter(en => en.exerciseRoutineId === e.id)}></ExerciseRoutine>)}
            </div>
        </div>
    </div>
}