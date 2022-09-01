import React from 'react'
import { RecipeContext } from "./RecipeContext";
import { useContext } from "react";
import { dataBaseService } from '../../Backend/FirebaseUtils';

export default function SingleRecipe(recipe) {
  const {getMyRecipes}=useContext(RecipeContext)
  const handleAdd=()=>{
    const myrecipes={
      id:recipe.recipe.id,
      image:recipe.recipe.image,
      imageType:recipe.recipe.imageType,
      title:recipe.recipe.title
    };
    dataBaseService.add(myrecipes)
    getMyRecipes()
  }
  return (
    <div>
      <h4>{recipe.recipe.title}</h4>
      <figure><img src={`${recipe.recipe.image}`} alt="" /></figure>
      <button type='button' onClick={handleAdd}>Add</button>
      <button>More</button>
    </div>
  )
}
