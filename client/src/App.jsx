/* eslint-disable no-unused-vars */

import HomePage from './pages/HomePage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import AuthProviderCustom from './components/AuthProviderCustom'
import CreateClassroom from './pages/CreateClassroom'
import ManageClass from './pages/ManageClass'

const App = () => {
  return (
    <>
      <AuthProviderCustom>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/classroom/new" element={<ManageClass/>}/>
            <Route path="/classroom/manage" element={<CreateClassroom/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProviderCustom>

    </>
  )
}

export default App