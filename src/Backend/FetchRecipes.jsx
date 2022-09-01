//Search by ingredients
//Cuisine: Drop down
//Diet: Drop down
//Changeable params

import axios from "axios"
import MyFridge from "../Frontend/Components/MyFridge";
import FetchIngredients from "./FetchIngredients";

export const getRecipeDataViaKeyword = async (keyword, number) =>{
    try{
        const res = await axios.get(`${process.env.REACT_APP_SPOONACULAR_RECIPES_URL}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${keyword}&number=${number}`)
        const data = res.data;

        console.log(data)
    }catch(e){
        console.log(e)
    }
}

export const FetchRecipes = () => {
    getRecipeDataViaKeyword('hamburger', 10);
    return (
        <>
            <div>backendTest</div>
            <MyFridge />
            <FetchIngredients />
        </>
    )
  }


