import React from 'react'
import Searchbar from './Searchbar';
import { RecipeProvider } from './RecipeContext';
import { FetchRecipes } from '../../Backend/FetchRecipes';
export default function Main() {
  return (
    <>
        <RecipeProvider>
            <Searchbar/>
            <FetchRecipes />
        </RecipeProvider>
    </>
  )
}
