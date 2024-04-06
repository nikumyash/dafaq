/* eslint-disable no-unused-vars */
import React from 'react'
import HomePage from './pages/HomePage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import AuthProviderTeachers from "./components/AuthProviderTeachers"
import AuthProviderStudents from "./components/AuthProviderStudents"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <AuthProviderTeachers>
            <Route path="/teacher" element={<HomePage/>}/>
          </AuthProviderTeachers>
          <AuthProviderStudents>
            <Route path="/student" element={<HomePage/>}/>
          </AuthProviderStudents>
        </Routes>
      </BrowserRouter>
      <HomePage/>
    </>
  )
}

export default App