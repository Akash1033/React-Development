import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/Components/Home'
function App() {

  let obj = {
    content : "the pic is with high quality and resolution.",
    content2 : "the pic is with high quality and resolution.",content3 : "the pic is with high quality and resolution."
  }
  return (
    <>
  <Home username= "The pic"  myobj ={obj}/>
  
    </>
  )
}

export default App
