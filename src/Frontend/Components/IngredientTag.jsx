import React, { useContext } from 'react'
import { RecipeContext } from './RecipeContext'
import { dataBaseService, ingredientsRef } from '../../Backend/FirebaseUtils'
import { onSnapshot } from "firebase/firestore";

const IngredientTag = ({name}) => {
    const { setMyIngredients } = useContext(RecipeContext)

    const onTimeUpdate = (ref) => {
        const updatedData = onSnapshot(ref, (querySnapshot) => {
            setMyIngredients(
                querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                }))
            )
        })
        return updatedData;
      }

    const handleDelete = async (e) =>{
        e.preventDefault()
        console.log('delete');
        await dataBaseService.deleteIngredient(name);
        onTimeUpdate(ingredientsRef)

    }

    const handleChange = () =>{
        console.log('Checked')
    }
  return (
    <li>
      <h5>{name}</h5>
      <button onClick={handleDelete}>X</button>
      <input type='checkbox' onChange={handleChange}></input>
    </li>
  )
}

export default IngredientTag