import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 let [counter,setCounter]  = useState(5)

  // let counter = 5


  const addValue = () => {
    if(counter < 20 ) { 
    counter = counter + 1;
    setCounter(counter)
    }
  }

  const removeValue = () =>{
    if(counter > 0){
    setCounter(counter -1) ;
    }
  }
  return (
    <>
      <h1>Akash aur react</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button> <br/>
      <button onClick={removeValue}>Remove Value</button>
      <p>1 to 100 : {counter}</p>
    </>
  )
}

export default App
