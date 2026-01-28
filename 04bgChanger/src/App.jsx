import { useState } from "react"

function App() {
  const [color , setColor] = useState("aqua")

  return (
    
     <div className="w-full h-screen duration-200"
      style={{backgroundColor : color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-2xl">
            <button className="outline-none px-4 py-1 rounded-full text-white"style={{backgroundColor : "red"}} >Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white"style={{backgroundColor : "green"}} >green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white"style={{backgroundColor : "blue"}} >Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white"style={{backgroundColor : "pink"}} >Pink</button>
            <button className="outline-none px-4 py-1 rounded-full text-white"style={{backgroundColor : "yellow"}} >Yellow</button>
            <button className="outline-none px-4 py-1 rounded-full text-white"style={{backgroundColor : "orange"}} >Orange</button>
          </div>
        </div>
     </div>
    
  )
}

export default App
