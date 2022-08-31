import React,{ useState,useRef,useEffect} from 'react'
import {getRecipeDataViaKeyword} from '../../Backend/FetchRecipes';
import { RecipeContext } from "./RecipeContext";
import { useContext } from "react";
import SingleRecipe from './SingleRecipe';
import axios from 'axios';

export default function Searchbar() {
    const searchInput=useRef();
    const [option,setOption]=useState("5");
    const {recipes,addRecipe}=useContext(RecipeContext)

    useEffect(()=>{async function fetchApi(){
        const response=await axios.get(`${process.env.REACT_APP_SPOONACULAR_RANDOM_URL}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=10&tags=dessert`);
        console.log(response.data.recipes)
        addRecipe(response.data.recipes)
    }
    fetchApi()
    },[])
    const handleNumber=(e)=>{
        setOption(Number(e.target.value))
    }
    const searchHandler=(e)=>{
        const search=searchInput.current.value
        e.preventDefault()
        addRecipe(getRecipeDataViaKeyword(search,option))
    }
  return (
    <>
    <form onSubmit={searchHandler}>
      <input ref={searchInput} type="text" />
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
