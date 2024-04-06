/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProfilePage from './pages/SignUpPage'
import CreateClass from './pages/CreateClass'
import ClassCard from './components/ClassCard'
import Classroom from './pages/Classroom'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
        <CreateClass/>  
        {/* <Classroom/> */}


        {/* <Routes>
          <Route path='/CreateClass' element={<CreateClass/>}></Route>
          <Route path='/Classroom' element={<Classroom/>}></Route>
          <Route path='/ClassCard' element={<ClassCard/>}></Route>
        </Routes> */}


      </div>
    </>
  )
}

export default App