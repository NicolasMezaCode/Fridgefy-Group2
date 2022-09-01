import React from 'react'
import axios from "axios"

export const getIngredientsData = async (keyword) =>{
    try{
        const res = await axios.get(`${process.env.REACT_APP_SPOONACULAR_INGREDIENTS_URL}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${keyword}&number=10&sort=calories&sortDirection=desc`)
        const data = res.data;
    
        console.log(data)
    }catch(e){
        console.log(e)
    }
}

const FetchIngredients = () => {
    // getIngredientsData();
  return (
    <div>FetchIngredients</div>
  )
}

export default FetchIngredients