/* eslint-disable no-unused-vars */
import React from 'react'

import HomePage from './pages/HomePage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import AuthProviderCustom from './components/AuthProviderCustom'

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
            {/* <Route path="/teacher" element={<AuthProviderTeachers><TeacherPage/></AuthProviderTeachers>}/>
            <Route path="/student" element={<AuthProviderStudents><StudentPage/></AuthProviderStudents>}/> */}
        </Routes>
      </BrowserRouter>
      
=======

      <AuthProviderCustom>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProviderCustom>

>>>>>>> acfd71a6b5f3efffa313b396dfb2fa8abe383377
    </>
  )
}

export default App