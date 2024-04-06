const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16 px-8 m-auto text-white bg-zinc-900 ">
        <h1 className='text-3xl ml-6 font-bold text-orange-600'>
          <span className='text-5xl'>DA</span><span className='text-5xl text-[#00df9a]'>FAQ</span>
        </h1>
        <ul className='flex gap-4'>
            <li className='py-4 px-8 text-lg transition-all ease duration-300 hover:text-blue-400 cursor-pointer text-center'>
              For students
            </li>
            <li className='py-4 px-8 text-lg transition-all ease duration-300 hover:text-blue-400 cursor-pointer text-center'>
              For teachers
            </li>
        </ul>   
    </div>  
  )
}

export default Navbar