import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const {isAuthenticated, loginWithRedirect, logout} =useAuth0();
  return (
    <div className="flex justify-between items-center h-16 px-4 md:px-12 text-white bg-zinc-900 ">
        <Link to="/" className='text-3xl cursor-pointer md:text-5xl font-bold text-orange-600'>
          <span className=''>DA</span><span className='text-[#00df9a]'>FAQ</span>
        </Link>
        <div className="md:flex hidden gap-8">
          <Link to="/classroom/new" className="flex text-xl cursor-pointer hover:text-blue-500 transition-all ease duration-200 ">
              Create Classroom
          </Link>
          <Link to="/classroom/manage" className="flex text-xl cursor-pointer hover:text-blue-500 transition-all ease duration-200">
            My Classrooms
          </Link>
        </div>
        {isAuthenticated?
        (<div> 
            <div onClick={()=>logout()} className="flex rounded-full transition-all ease duration-200 cursor-pointer px-4 py-2 items-center justify-center bg-gray-500 text-white text-lg hover:bg-gray-700">
              Logout
            </div>
        </div>)
        :(<div className="flex flex-row gap-8 mr-8">
            <div onClick={()=>loginWithRedirect()} className="flex rounded-full transition-all ease duration-200 cursor-pointer px-4 py-2 items-center justify-center bg-blue-600 text-white text-lg hover:bg-blue-700">
              Login
            </div>
        </div>)}

    </div>  
  )
}

export default Navbar