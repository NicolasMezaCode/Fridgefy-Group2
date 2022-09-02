import React from 'react';
import { dataBaseService } from '../../Backend/FirebaseUtils';

export default function UserRecipe({id,name}) {
    const handleDelete=()=>{
        dataBaseService.delete(id.toString())
    }

  return (
    <li>
      <h5>{name}</h5>
      <button onClick={handleDelete}>X</button>
    </li>
  )
}
