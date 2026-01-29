import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length , setLength] = useState(8)
  const [number , setNumber] = useState(false);
  const [char , setChar] = useState(false);
  const [password , setPassword] = useState("");

  // Use Ref Hook
  const passwordRef = useRef(null)

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str+= "0123456789"
    if(char) str+= "!@#$%^&*(){}"

    for(let i =1 ; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  } , [length , number, char, setPassword])

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,9) it helps to select ranage of chrarcters
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passGenerator()
  } ,[length, number, char, passGenerator])
  return (
    <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-3xl text-white text-center px-2 py-2'>Password Generator</h1>
     <div className='flex shadow rounded-md m-2 overflow-hidden  '>
      <input 
      type="text" 
      value={password}
      className='outline-none w-full mb-4 py-4 px-3 bg-white '
      placeholder='Enter Password'
      readOnly
      ref={passwordRef}
      />

      <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 mb-4 shrink-0'>Copy</button>
     </div>

     <div className='flex text-sm gap-x-2 py-2 '>
      <div className='flex items-center gap-x-1'>
        <input 
        type='range'
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={ (e) => {setLength(e.target.value)}}
        />
        <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type="checkbox" 
        defaultChecked = {number}
        id="numberInput"
        onChange={() => {
          setNumber( (prev) => !prev);
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={char}
        id="characterInput"
        onChange={ () => {
          setChar ( (prev) => !prev);
        }}
        />
        <label htmlFor="characterInput"> Characters</label>
      </div>
     </div>
  </div>
    </>
  )
}

export default App
