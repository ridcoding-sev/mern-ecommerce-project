import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './page/Add'
import List from './page/List'
import Order from './page/Order'
import Login from './components/Login'
import Home from './page/Home'
import ContactList from './page/ContactList'


 import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const backendUri = import.meta.env.VITE_BACKEND_URI
export const currency = '$'
const App = () => {

 const [token, setToken] = useState(
  localStorage.getItem('token') || ''
)

useEffect(() => {
  if (token) {
    localStorage.setItem('token', token)
  } else {
    localStorage.removeItem('token')
  }
}, [token])
  return (
    <div className='bg-gray-50 min-h-screen'>
    <ToastContainer/>
      {token === '' ? <Login setToken = {setToken}/> :
        <>
          <Navbar  setToken= {setToken} />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
               <Route path='/' element={<Home/>} />
                <Route path='/add' element={<Add token ={token} />} />
                <Route path='/list' element={<List token ={token} />} />
                <Route path='/order' element={<Order token ={token} />} />
                <Route path="/contacts" element={<ContactList />} />
              </Routes>
            </div>
          </div>
        </>
      }

    </div>
  )
}

export default App