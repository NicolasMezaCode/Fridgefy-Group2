import React, { createContext, useState } from "react"
import MyRecipes from "./MyRecipes";

export const RecipeContext=createContext();

export function RecipeProvider({children}){
  const [recipes,setRecipe]=useState([])
  const[myRecipes,setMyRecipes]=useState([])

  const addRecipe=(data)=>{
      const recipes=Promise.resolve(data)
      recipes.then(value=>{
        setRecipe(value)
        console.log(value)
      }).catch(err=>{
        console.log(err)
      })
  }

  const addMyRecipes=(data)=>{
    setMyRecipes(myRecipes.push(data))
    console.log(myRecipes)
    
  }

  return(
    <RecipeContext.Provider value={{
      recipes:recipes,addRecipe,myRecipes:myRecipes,addMyRecipes
    }}>
        {children}
    </RecipeContext.Provider>
  )
}