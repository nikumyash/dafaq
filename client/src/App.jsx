/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProfilePage from './pages/SignUpPage'
import CreateClass from './pages/CreateClass'
import ClassCard from './components/ClassCard'
import Classroom from './pages/Classroom'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import DoubtsMgmt from './pages/DoubtsMgmt'
import Doubt from './components/Doubt'


const App = () => {
  return (
    <>
      <div className="flex">
        <DoubtsMgmt/>
        <Doubt/>
      </div>
    </>
  )
}

export default App