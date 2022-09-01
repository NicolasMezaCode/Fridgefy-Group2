import React from 'react'

export default function UserRecipe({id,name}) {
  return (
    <li>
      <h5>{name}</h5>
      <button>X</button>
    </li>
  )
}
