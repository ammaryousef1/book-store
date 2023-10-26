/* eslint-disable react/prop-types */
import React  from 'react'
import { MdOutlineDelete } from 'react-icons/Md'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiBookOpen } from 'react-icons/bi'
import { BsInfoCircle } from 'react-icons/bs'
import { FaEye, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BookCard = ({book}) => {
  return (
    <div className='p-4 border rounded-md border-sky-700  w-[330px] shadow-lg'>
    <div>
      <div className='flex items-center justify-between'>
        <span>{book._id}</span>
        <div className='bg-[#F1A5A6] p-2 rounded-md'>{book.puplishdin}</div>
      </div>
    </div>

      <div className='mb-10'>
      <div className='flex items-center gap-2'>
          <BiBookOpen />
          <span className='text-[18px]'>{book.title}</span>
        </div>
        <div className='flex items-center gap-2'>
          <FaUserCircle />

          <span className='text-[18px]'>{book.author}</span>
        </div>
      </div>

      <ul className='flex justify-between '>
        <li>
          <Link to={`/books/details/${book._id}`}>
            <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
          </Link>
        </li>
        
        <li>
          <Link to={`/books/edit/${book._id}`}>
            <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
          </Link>
        </li>

        <li>
          <Link to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default BookCard