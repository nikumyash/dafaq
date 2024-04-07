import { Outlet } from "react-router-dom"
import Navbar from "./../components/Navbar";
const Mainlayout = () => {
  return (
    <main>
        <Navbar/>
        <Outlet/>
    </main>
  )
}

export default Mainlayout