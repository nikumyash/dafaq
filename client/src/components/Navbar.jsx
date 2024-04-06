import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const {isAuthenticated, user, loginWithRedirect, logout} =useAuth0();
  return (
    <div className="flex justify-between items-center h-16 px-12 m-auto text-white bg-zinc-900 ">
        <h1 className='text-3xl ml-6 font-bold text-orange-600'>
          <span className='text-5xl'>DA</span><span className='text-5xl text-[#00df9a]'>FAQ</span>
        </h1>
        {/* <ul className='flex gap-4'>
            <li className='py-4 px-8 text-lg transition-all ease duration-300 hover:text-blue-400 cursor-pointer text-center'>
              For students
            </li>
            <li className='py-4 px-8 text-lg transition-all ease duration-300 hover:text-blue-400 cursor-pointer text-center'>
              For teachers
            </li>
        </ul>    */}
        {isAuthenticated?
        (<div> 
             
        </div>)
        :(<div className="flex flex-row gap-8 mr-8">
            <div onClick={()=>loginWithRedirect} className="flex rounded-full transition-all ease duration-200 cursor-pointer h-12 w-32 items-center justify-center bg-blue-600 text-white text-lg hover:bg-blue-700">
              Login
            </div>
        </div>)}
    </div>  
  )
}

export default Navbar