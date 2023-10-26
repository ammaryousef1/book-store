import React from 'react'
import { Routes , Route } from 'react-router'
import CreateBook from './pages/CreateBooks.jsx'
import DeleteBook from './pages/DeleteBook.jsx'
import EditBook from './pages/EditBook.jsx'
import Home from './pages/Home.jsx'
import ShowBook from './pages/ShowBook.jsx'
const App = () => {
  return (
    <h1 className="">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/Delete/:id' element={<DeleteBook />} />
      </Routes>
  </h1>
  )
}

export default App