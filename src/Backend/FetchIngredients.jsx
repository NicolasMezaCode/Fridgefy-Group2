import React from 'react'
import axios from "axios"

export const getIngredientsData = async (keyword) =>{
    try{
        const res = await axios.get(`${process.env.REACT_APP_SPOONACULAR_INGREDIENTS_URL}?query=${keyword}&number=1&metaInformation=false&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`)
        const data = await res.data[0].name;
        console.log(res)
    
        console.log(data)
        return data;
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