import React from 'react'

export default function SingleRecipe(recipe) {
  return (
    <div>
      <figure><img src={`${recipe.recipe.image}`} alt="" /></figure>
    </div>
  )
}
