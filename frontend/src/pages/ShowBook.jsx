import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import BackButton from '../Component/BackButton'
import Spinenr from '../Component/Spinenr'

const ShowBook = () => {
  const [loading , setloading] = useState(false)
  const [Book , setBook] = useState({})
  const { id } = useParams()
  useEffect(() => {
    setloading(true)
    axios.get(`http://localhost:3003/book/${id}`).then((response) =>{
      setBook(response.data)
      setloading(false)
    }).catch((error) => {
      console.log(error)
      setloading(false)
    })
  } ,[])
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='my-4 text-3xl'>Show Book</h1>
      {loading ? (
        <Spinenr />
      ) : (
        <div className='flex flex-col p-4 border-2 border-sky-600 w-fit' >
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-600'>Id</span>
            <span>{Book._id}</span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-600'>title</span>
            <span>{Book.title}</span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-600'>author</span>
            <span>{Book.author}</span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-600'>puplishdin</span>
            <span>{Book.puplishdin}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowBook