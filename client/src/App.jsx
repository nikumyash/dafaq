/* eslint-disable no-unused-vars */
import React from 'react'
import HomePage from './pages/HomePage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react';
import AuthProviderCustom from './components/AuthProviderCustom'

const App = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =useAuth0();
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