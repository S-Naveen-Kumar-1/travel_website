import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { AllBlogs } from './AllBlogs'
import Hotels from './Hotels'
import Destinations from './Destinations'
import Packages from './Packages'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/all-blogs' element={<AllBlogs/>}></Route>
        <Route path='/all-hotels' element={<Hotels/>}></Route>
        <Route path='/all-destinations' element={<Destinations/>}></Route>
        <Route path='/all-packages' element={<Packages/>}></Route>

    </Routes>
  )
}
