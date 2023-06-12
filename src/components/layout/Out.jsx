import React from 'react'
import Header from './Header'
import { Outlet,Routes,Route } from 'react-router-dom'
import Footer from './Footer'
import Home from '../pages/Home'
import Shop from '../pages/Shop'

function Out() {
  return (
    <>
        <Header/>
       <Routes>
       <Route index element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>

       </Routes>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Out