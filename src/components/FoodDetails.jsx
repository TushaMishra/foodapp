import { useEffect, useState } from "react";
import styles from './fooddetails.module.css'
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
  const API_KEY = "9bc8c7ebfaa14ac2926c282f6bc30e5c"
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`)
      const data = await res.json()
      setFood(data)
      setIsLoading(false)
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.recipeCard}>
            <h1 className={styles.recipeName}>{food.title}</h1>
            <img className={styles.recipeImage} src={food.image} alt="" />
            <div className={styles.recipeDetails}>
              <span><strong>⌚{food.readyInMinutes} Minutes</strong></span>
              <span>👪<strong> Serve {food.Servings}</strong></span>
              <span><strong>{food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}</strong></span>
              <span><strong>{food.vegan ? "🐮 Vegan" : ""}</strong></span>
            </div>
            <div>
              <span><strong>${food.pricePerServing / 100} Per Serving</strong></span>
            </div>
            <h2>Ingredients</h2>
            {console.log("fooddetails")}
            <ItemList food={food}/>
            <h2>Instructions</h2>
          <div className={styles.recipeInstructions}>
            <ol>
              {food.analyzedInstructions[0].steps.map((step)=>(
                  <li key={step.number}>{step.step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
