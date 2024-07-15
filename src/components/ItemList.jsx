import Item from "./Item";

export default function ItemList({food}) {
  console.log(food)
  return (
    <div>
        {food.extendedIngredients.map((item)=>(
          <Item key={item.id} item={item}/>
        ))}
    </div>
  )
}
