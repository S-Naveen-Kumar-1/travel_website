import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { AllBlogs } from './AllBlogs'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/all-blogs' element={<AllBlogs/>}></Route>

    </Routes>
  )
}
