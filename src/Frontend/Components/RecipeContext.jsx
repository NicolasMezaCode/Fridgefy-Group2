import React, { createContext, useState } from "react"

export const RecipeContext=createContext();

export function RecipeProvider({children}){
  const [recipes,setRecipe]=useState([])

  const addRecipe=(data)=>{
      const recipes=Promise.resolve(data)
      recipes.then(value=>{
        setRecipe(value)
        console.log(value)
      }).catch(err=>{
        console.log(err)
      })
      
      
  }
  return(
    <RecipeContext.Provider value={{
      recipes:recipes,addRecipe
    }}>
        {children}
    </RecipeContext.Provider>
  )
}