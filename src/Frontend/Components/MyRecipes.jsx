import React from 'react'
import { RecipeContext } from "./RecipeContext";
import { useContext } from "react";

export default function MyRecipes() {
    const {myRecipes}=useContext(RecipeContext)
  return (
    <section>
        <div>
            <h3>My recipes</h3>
        </div>
        {myRecipes.map((recipe)=>(<h3>{recipe.title}</h3>))}
    </section>
  )
}
