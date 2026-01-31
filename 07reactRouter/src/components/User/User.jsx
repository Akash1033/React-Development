import React from 'react'
import { useParams } from 'react-router-dom'
function User() {

    const {userId} = useParams()
  return (
    <div className='bg-gray-600 text-white py-4'>
      User: {userId}
    </div>
  )
}

export default User
