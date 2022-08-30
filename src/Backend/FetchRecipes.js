//Search by ingredients
//Cuisine
//Diet
//Changeable params

import axios from "axios"
import FetchIngredients from "./FetchIngredients";

const getRecipeData = async () =>{
    try{
        const res = await axios.get(`${process.env.REACT_APP_SPOONACULAR_RECIPES_URL}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=lasagna&cuisine=''&number=10`)
        const data = res.data;
    
        console.log(data)
    }catch(e){
        console.log(e)
    }
}

export const FetchRecipes = () => {
    getRecipeData();
    return (
        <>
            <div>backendTest</div>
            <FetchIngredients />
        </>
    )
  }
  

