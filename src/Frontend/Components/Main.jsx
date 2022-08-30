import React,{useState} from 'react'

export default function Main() {
    const [search,setSearch]=useState("")
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
  return (
    <div>
      <h1>Main</h1>
      <input onChange={handleChange} value={search} type="text" />
      <button onClick={()=>{setSearch("")}}>Search</button>
      <h2>{search}</h2>
    </div>
  )
}
