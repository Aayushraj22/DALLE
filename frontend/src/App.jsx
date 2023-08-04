import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

import './App.css'
import {DALLE} from './assets/'
import {Home, CreatePost} from './pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <header className='p-4 bg-white border-b border-b-[#ebe6f4] flex justify-between items-center w-full sm:px-8 px-4 py-4'>
          <Link to="/" 
          >
            <img src={DALLE} alt="logo"
              className='w-28 object-contain'  
            />
          </Link>
          <Link to='/create-post'
            className='px-4 py-2 text-[#6469ff] hover:text-white rounded-md border-2 border-[#6469ff] hover:bg-[#6469ff] font-inter font-medium '
          >
            Create
          </Link>
        </header>

        <main className='sm:px-8 px-4 py-8 w-full min-h-[calc(100vh-72.67px)] bg-slate-100'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create-post' element={<CreatePost/>} />
          </Routes>
        </main>
      
      </BrowserRouter>
    </>
  )
}

export default App
