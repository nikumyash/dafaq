import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Classroom from './Classroom'

const CreateClass = () => {
    const[classroom, setClassroom] = useState([])
  return (
    // <div className='border rounded-xl flex m-10 h-60 w-48 flex-col text-white cursor-pointer hover:opacity-80' onClick={<Link to="./Classroom"/>}>
    //     <div className="h-40 w-40 rounded-full m-auto text-[100px] text-center">+</div>
    // </div>
    <Link  to="./Classroom">
        <div className='border rounded-xl flex my-10 mx-6 h-60 w-48 flex-col text-white cursor-pointer hover:opacity-80'>
            <div className="h-40 w-40 rounded-full m-auto text-[100px] text-center">+</div>
        </div>
    </Link>
  )
}

export default CreateClass