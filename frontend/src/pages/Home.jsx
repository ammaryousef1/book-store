import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinenr from '../Component/Spinenr'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox  } from 'react-icons/Md'
import BookCard from '../Component/BookCard'
const Home = () => {
  const [loading , setloading] = useState(false);
  const [books , setbooks] = useState([]);

  useEffect(() => {
    setloading(true)
    axios.get('http://localhost:3003/book').then((response) => {
      console.log(response.data.data)
      setbooks(response.data.data)
      setloading(false)
    }).catch((error) => {
      console.log(error)
      setloading(false)
    })
  }, [])
  return (
    <div className='p-4'> 
      <div className="flex items-center justify-center " >
        <h1 className='my-8 text-3xl'>Book list</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className='text-4xl text-sky-800' />
        </Link>
      </div>
      {loading ? (
        <Spinenr />
      ):(
    
        <div className='flex flex-wrap gap-5 '> 
          {books.map((book) => (
            <>
            <BookCard book={book} />
            </>
          ))}
        </div>

      ) }
    </div>
  )
}

export default Home