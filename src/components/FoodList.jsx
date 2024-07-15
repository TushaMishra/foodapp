import FoodItem from "./FoodItem";
import styles from './foodlist.module.css'

export default function FoodList({ foodData, setFoodId}) {
  return (
    <div className={styles.foodList}>
      {foodData.map((food) => (
        <FoodItem  key={food.id} food={food} setFoodId={setFoodId}/>
      ))}
    </div>
  );
}
