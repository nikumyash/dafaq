import React from 'react'
import { SiGoogleclassroom } from "react-icons/si";

const ClassCard = () => {
  return (
    <div className='border rounded-xl flex my-10 mx-6 h-60 w-48 flex-col text-white cursor-pointer hover:opacity-80'>
        <div className="h-32 w-32 border rounded-full m-auto"></div>
        <div className="m-auto mt-2">Wad lecture</div>
    </div>
  )
}

export default ClassCard