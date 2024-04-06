import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16 px-4 m-auto text-white bg-zinc-900 ">
        <h1 className='text-3xl ml-6 font-bold text-orange-600'><span className='text-5xl'>Da</span><span className='text-5xl text-[#00df9a]'>FAQ</span></h1>
        <ul className='flex '>
            <li className='py-4 px-8 text-lg transition-all ease duration-300 hover:text-blue-400  cursor-pointer text-center'>For <span className='text-xl'>students</span></li>
            <li className='py-4 px-8 text-lg transition-all ease duration-300 hover:text-blue-400  cursor-pointer text-center'>For <span className=' text-xl'>teachers</span></li>
        </ul> 
        <div className="flex flex-row gap-8 mr-8">
            <div className="flex rounded-md transition-all ease duration-200 cursor-pointer h-12 w-32 items-center justify-center bg-blue-600 text-white text-lg hover:bg-blue-700">Register</div>
            <div className="flex rounded-md transition-all ease duration-200 cursor-pointer h-12 w-28 items-center justify-center hover:bg-slate-800 hover:text-white">Log In <IoMdArrowDropdown/></div>
        </div>
    </div>  
  )
}

export default Navbar