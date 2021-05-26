// import logo from './logo.svg';
import './App.css';
import Routes from './Routes';

// to be removed
import {useState} from "react"
import axios from "axios"

//

function App() {
  // return (
  //   <>
  //   <Routes/>
  //   </>
  // );
  const [state,setState]=useState("")

  const postcategory= async (e)=>{
    e.preventDefault()
    console.log("i am clicked")
     fetch(`http://localhost:5000/api/postcategory`,{
      method:"POST",
      headers:{
          Accept:'application/json',
          "Content-type":'application/json'
      },
      body:JSON.stringify({category:state})
  }).then(response=>{
      return response.json()
  })
  .catch(error=>{
      console.log(error.message)
  }).then(data=>{
		if(data.error){
			console.log(data.error)
		}
		else{
			console.log(data)
		}
	})

  }

  return (
    <>
    <form>
      <input type="text" placeholder="category name" value={state} onChange={(e)=>{setState(e.target.value)}}></input>
      <button type="submit" onClick={postcategory}>post category</button>
    </form>
    </>
  );
}

export default App;
