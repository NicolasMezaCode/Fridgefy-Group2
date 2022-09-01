import React from 'react'
import Searchbar from './Searchbar';
import { RecipeProvider } from './RecipeContext';
import { FetchRecipes } from '../../Backend/FetchRecipes';
import MyRecipes from './MyRecipes';
export default function Main() {
  return (
    <>
        <RecipeProvider>
            <Searchbar/>
            <MyRecipes/>
        </RecipeProvider>
    </>
  )
}
