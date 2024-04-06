/* eslint-disable no-unused-vars */
import React from 'react'
import HomePage from './pages/HomePage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import AuthProviderTeachers from "./components/AuthProviderTeachers"
import AuthProviderStudents from "./components/AuthProviderStudents"
import TeacherPage from './pages/TeacherPage'
import StudentPage from './pages/StudentPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
            <Route path="/teacher" element={<AuthProviderTeachers><TeacherPage/></AuthProviderTeachers>}/>
            <Route path="/student" element={<AuthProviderStudents><StudentPage/></AuthProviderStudents>}/>
        </Routes>
      </BrowserRouter>
      <HomePage/>
    </>
  )
}

export default App