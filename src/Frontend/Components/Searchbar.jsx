import React,{useState} from 'react'

export default function Searchbar() {
    const [search,setSearch]=useState("");
    const [option,setOption]=useState("5")
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    const handleNumber=(e)=>{
        setOption(e.target.value)
    }
  return (
    <>
    <form>
      <input onChange={handleChange} type="text" />
      <select onChange={handleNumber} name="numbers" id="">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
      </select>
      <button type='button'>Search</button>
      <h2>{search+option}</h2>   
    </form>
    </>
  )
}
