import React from 'react'
import Searchbar from './Searchbar';
import { RecipeProvider } from './RecipeContext';
export default function Main() {
  return (
    <>
        <RecipeProvider>
            <Searchbar/>
        </RecipeProvider>
    </>
  )
}
