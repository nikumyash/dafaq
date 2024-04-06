import React from 'react'
import { MdAccountCircle } from "react-icons/md";


const DoubtsMgmt = () => {
  return (
    <div>
        <h1 className='text-white text-4xl m-12'>Doubts Manager</h1>
        <div className="h-60 w-52 border rounded-lg m-12  text-white">
            <MdAccountCircle className='h-40 w-40 m-auto mt-6' />
            <h2 className='flex justify-center mt-4'>Balaji Chaugule</h2>
        </div>

        <div className="text-white">
            <h1 className='text-3xl m-12 mb-4'>Doubts : </h1>
            <div className="h-8 w-36 rounded flex justify-center items-center cursor-pointer hover:opacity-85 m-12 mt-4 bg-red-600">Create a post</div>
        </div>
    </div>
  )
}

export default DoubtsMgmt