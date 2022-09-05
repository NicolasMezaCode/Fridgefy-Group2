import React from 'react'
import Searchbar from './Searchbar';
import { RecipeProvider } from './RecipeContext';
import { FetchRecipes } from '../../Backend/FetchRecipes';
import MyRecipes from './MyRecipes';
import { MyFridge } from './MyFridge';

export default function Main() {
  return (
    <>
        <RecipeProvider>
            <Searchbar/>
            <MyRecipes/>
            <MyFridge />
        </RecipeProvider>
    </>
  )
}
