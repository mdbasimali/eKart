import React, { useContext } from 'react'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/login'
import { Route, Routes } from 'react-router-dom'
import Nav from './component/Nav'
import { userDataContext } from '../context/UserContext'

const App = () => {
  let {userData}=useContext(userDataContext)
  return (
    <>
    {userData && <Nav/>}
    <Routes>   
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Registration/>}/>
    </Routes>
    
    </>
  )
}

export default App
