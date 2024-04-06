/* eslint-disable no-unused-vars */
import HomePage from './pages/HomePage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import AuthProviderCustom from './components/AuthProviderCustom'
import Classroom from './pages/Classroom'
import CreateClass from './pages/CreateClass'

const App = () => {
  return (
    <>
      <AuthProviderCustom>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/classroom/new" element={<CreateClass/>}/>
            <Route path="/classroom/manage" element={<Classroom/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProviderCustom>
    </>
  )
}

export default App