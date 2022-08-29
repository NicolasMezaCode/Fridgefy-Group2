import React from 'react'
import axios from "axios"

const getIngredientsData = async () =>{
    try{
        const res = await axios.get(`${process.env.REACT_APP_SPOONACULAR_INGREDIENTS_URL}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=banana&number=2&sort=calories&sortDirection=desc`)
        const data = res.data;
    
        console.log(data)
    }catch(e){
        console.log(e)
    }
}

const FetchIngredients = () => {
    getIngredientsData();
  return (
    <div>FetchIngredients</div>
  )
}

export default FetchIngredients