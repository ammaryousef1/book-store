
import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router'
import BackButton from '../Component/BackButton'
import Spinenr from '../Component/Spinenr'
const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [puplishdin, setPuplishdin] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleSaveBook = () => {
    const data = {
      title,
      author,
      puplishdin,
    };
    setLoading(true);
    axios
      .post('http://localhost:3003/book', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div className='p-4'>
      <BackButton />
        <h1 className='my-4 text-3xl'>Create Books</h1>
        { loading ? <Spinenr /> : '' }
        <div className='flex flex-col border-2 rounded-lg border-sky-400 w-[600px] p-4 mx-auto'>
          <div className="my-4">
            <label className='mr-4 text-xl text-gray-500'>title</label>
            <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full px-4 py-2 border-2 border-sky-500'
            />
          </div>
          <div className="my-4">
            <label className='mr-4 text-xl text-gray-500'>author</label>
            <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='w-full px-4 py-2 border-2 border-sky-500'
            />
          </div>
          <div className="my-4">
            <label className='mr-4 text-xl text-gray-500'>puplishdin</label>
            <input
            value={puplishdin}
            onChange={(e) => setPuplishdin(e.target.value)}
            className='w-full px-4 py-2 border-2 border-sky-500'
            />
          </div>
          <button className='p-2 m-8 bg-sky-300' onClick={handleSaveBook}>save</button>
        </div>
    </div>
  )
}

export default CreateBooks