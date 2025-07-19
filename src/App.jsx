import { useState } from 'react'
import './App.css'

function App() {
   const [count,setCount]=useState(0)
   const Addvalue=()=>
   {
    setCount((count)=>count+1)
    setCount((count)=>count+1)
    setCount((count)=>count+1)
    setCount((count)=>count+1)
    setCount((count)=>count+1)
   }
   const Removevalue=()=>{
   setCount((count)=>count-1)
   setCount((count)=>count-1)
   setCount((count)=>count-1)
   setCount((count)=>count-1)
  setCount((count)=>count-1)
   }

  return (
    <>
      <h1>Counter game</h1>
      <button onClick={Addvalue}>Add value</button>
      {"     "}
      <button onClick={Removevalue}>Remove value</button>
      <h3>value:{count}</h3>
    </>
  )
}

export default App
