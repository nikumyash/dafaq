/* eslint-disable no-unused-vars */

import HomePage from './pages/HomePage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import AuthProviderCustom from './components/AuthProviderCustom'
import CreateClassroom from './pages/CreateClassroom'
import ManageClass from './pages/ManageClass'
import Classroom from './pages/Classroom'
import Mainlayout from './layouts/Mainlayout'

const App = () => {
  return (
    <>
      <AuthProviderCustom>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="classroom" element={<Mainlayout/>}>
              <Route path="/classroom/manage" element={<ManageClass/>}/>
              <Route path="/classroom/new" element={<CreateClassroom/>}/>
              <Route path="/classroom/:id" element={<Classroom/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProviderCustom>

    </>
  )
}

export default App