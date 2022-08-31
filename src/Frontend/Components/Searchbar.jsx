import React,{ useState} from 'react'
import {getRecipeDataViaKeyword} from '../../Backend/FetchRecipes';
import { RecipeContext } from "./RecipeContext";
import { useContext } from "react";
import SingleRecipe from './SingleRecipe';

export default function Searchbar() {
    const [search,setSearch]=useState("");
    const [option,setOption]=useState("5");
    
    const {recipes,addRecipe}=useContext(RecipeContext)

    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    const handleNumber=(e)=>{
        setOption(Number(e.target.value))
    }
    const searchHandler=(e)=>{
        e.preventDefault()
        addRecipe(getRecipeDataViaKeyword(search,option))
    }
  return (
    <>
    <form onSubmit={searchHandler}>
      <input onChange={handleChange} type="text" />
      <select onChange={handleNumber} name="numbers" id="">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
      </select>
      <button>Search</button>
    </form>
    {recipes.map((recipe)=>(<SingleRecipe recipe={recipe} key={recipe.id} />))}
    </>
  )
}
