import React, { useContext, useEffect } from 'react'
import IngredientTag from './IngredientTag'
import { RecipeContext } from './RecipeContext'
import { useAuthContext } from '../../AuthContext'


const FridgeContents = () => {
  const { myIngredients, getMyIngredients } = useContext(RecipeContext);
  const { user }=useAuthContext();

  useEffect(() =>{
    getMyIngredients(user.uid)
}, [])
  return (
    <ul>
      {myIngredients?.map((ingredient, index) => (<IngredientTag id ={index} name={ingredient.name}/>))}
    </ul>
  )
}

export default FridgeContents