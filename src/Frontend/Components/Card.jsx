import React from 'react'
import { RecipeContext } from "./RecipeContext";
import { useContext } from "react";

export default function SingleRecipe(recipe) {
  const {myRecipes,addMyRecipes}=useContext(RecipeContext)

  const handleAdd=()=>{
    addMyRecipes(recipe.recipe)
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
