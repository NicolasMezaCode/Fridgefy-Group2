import React from 'react'
import { RecipeContext } from "./RecipeContext";
import { useContext } from "react";
import { dataBaseService } from '../../Backend/FirebaseUtils';
import{ useAuthContext } from '../../AuthContext'


export default function SingleRecipe(recipe) {
  const {getMyRecipes}=useContext(RecipeContext);
  const {user}=useAuthContext();

  const handleAdd=()=>{
    const myrecipes={
      userId:user.uid,
      id:recipe.recipe.id,
      image:recipe.recipe.image,
      imageType:recipe.recipe.imageType,
      title:recipe.recipe.title
    };
    dataBaseService.add(myrecipes)
    getMyRecipes()
  };

  const handleMore=()=>{
    
  }



  return (
    <div>
      <h4>{recipe.recipe.title}</h4>
      <figure><img src={`${recipe.recipe.image}`} alt="" /></figure>
      <button type='button' onClick={handleAdd}>Add</button>
      <button type='button' onClick={handleMore} >More</button>
    </div>
  )
}
