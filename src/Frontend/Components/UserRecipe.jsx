import React from 'react';
import { dataBaseService } from '../../Backend/FirebaseUtils';
import { RecipeContext } from "./RecipeContext";
import { useContext,useEffect } from "react";
import { recipeRef } from '../../Backend/FirebaseUtils';


export default function UserRecipe({name}) {
    const {onTimeUpdate}=useContext(RecipeContext)
    const handleDelete=()=>{
        dataBaseService.delete(name)
        onTimeUpdate(recipeRef);
    }

  return (
    <li>
      <h5>{name}</h5>
      <button onClick={handleDelete}>X</button>
    </li>
  )
}
