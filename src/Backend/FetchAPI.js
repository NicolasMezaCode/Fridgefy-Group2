//Search by ingredients
//Cuisine
//Diet
//Changeable params

import axios from "axios"

const getData = async () =>{
    try{
        const res = await axios.get(`${process.env.REACT_APP_SPOONACULAR_URL}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=lasagna&cuisine=''&number=10`)
        const data = res.data;
    
        console.log(data)
    }catch(e){
        console.log(e)
    }
}

export const BackendTest = () => {
    getData();
    return (
      <div>backendTest</div>
    )
  }
  

