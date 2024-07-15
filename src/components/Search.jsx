import { useEffect, useState } from "react"
import styles from './search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "9bc8c7ebfaa14ac2926c282f6bc30e5c"
export default function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState("")
    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json()
            setFoodData(data.results)
        }
        fetchFood()
    }, [query])
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input} value={query} onChange={(e)=>setQuery(e.target.value)} type="text" />
    </div>
  )
}
9