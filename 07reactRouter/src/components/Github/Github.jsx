import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {            
    //         setData(data)
            
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      Github Followers : { data.followers}
      <img className='w-1/4 rounded-full' src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json()
}