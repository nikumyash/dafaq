/* eslint-disable no-unused-vars */
import React from 'react'

import HomePage from './pages/HomePage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import AuthProviderCustom from './components/AuthProviderCustom'

const App = () => {
  return (
    <>
      <AuthProviderCustom>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProviderCustom>
    </>
  )
}

export default App