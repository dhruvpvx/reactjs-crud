import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AddScreen from './AddScreen'
import EditScreen from './EditScreen'
import Home from './Home'
import ShowScreen from './ShowScreen'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/show/:id' element={<ShowScreen/>}/>
      <Route path='/edit/:id' element={<EditScreen/>}/>
      <Route path='/add' element={<AddScreen/>}/>
    </Routes>
  )
}

export default Routers