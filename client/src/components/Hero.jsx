import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import img from '../assets/1.jpg'
const Hero = () => {
  return (
    <div className='text-white'>
      <div className='flex justify-center flex-row'>
        <div className="flex-1">
          <div className="text-center mt-10 text-6xl">
            Let's Make Learning Easier
          </div>
          <div className="mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia placeat quisquam temporibus incidunt quae beatae sed dolorum fugiat aliquam quasi magnam, natus harum reprehenderit, eligendi laborum dolores corporis modi.
          </div>
        </div>
        <div className="flex-1">
          <img src={img} alt="" />
        </div>
      </div>
      <div className='flex justify-center flex-row'>
        <div className="flex-1">
          <img src={img} alt="" />
        </div>
        <div className="flex-1">
          <div className="text-center text-5xl">
            Teacher
          </div>
          <div className="">
            <li>Upload notes for your students to refer</li>
            <li>Clear your students doubts and make their future bright</li>
            <div className='text-2xl text-center'>
              Want to help your students? Join as a teacher
            </div>
            <div className="flex bg-blue-600 m-auto justify-center rounded-lg hover:bg w-28 h-10">
              <button>Get Started</button>
            </div>  
          </div>
        </div>
      </div>
      <div className='flex justify-center flex-row'>
        
        <div className="flex-1">
          <div className="text-center text-5xl">
            Student
          </div>
          <div className="">
            <li>Get your notes all at a single place</li>
            <li>Clear your doubts without any hesitation</li>
            <div className='text-2xl text-center'>
              Read from your notes and ask your doubts without hesitation
            </div>
            <div className="flex bg-blue-600 m-auto justify-center rounded-lg hover:bg w-28 h-10">
              <button>Get Started</button>
            </div>  
          </div>
        </div>
        <div className="flex-1">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
