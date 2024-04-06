import img from '../assets/1.jpg'
import { useAuth0 } from '@auth0/auth0-react';
const Hero = () => {
  const { getAccessTokenSilently} = useAuth0();

  return (
    <div className='text-white bg-zinc-900 mt-10'>
      <div className='flex justify-center flex-row'>
        <button onClick={async ()=>{
          const token = await getAccessTokenSilently();
          console.log(token);
          fetch("http://localhost:6969/",{
            method:"GET",
            headers:{
              authorization:`Bearer ${token}`
            }
          }).then(res=>res.json()).then(data=>console.log(data))}
        }>Submit</button>
        <div className="flex-1">
          <div className="text-center mt-10 text-6xl">
            Let's Make Learning Easier
          </div>
          <div className="mt-10 px-16">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia placeat quisquam temporibus incidunt quae beatae sed dolorum fugiat aliquam quasi magnam, natus harum reprehenderit, eligendi laborum dolores corporis modi.
          </div>
        </div>
        <div className="flex-1 ">
          <div className="h-full w-96 m-auto justify-center">
            <img className='' src={img} alt="" />
          </div>
        </div>
      </div>
      <div className='flex justify-center flex-row'>
        <div className="flex-1">
          <div className="h-full w-96 m-auto justify-center">
            <img className='' src={img} alt="" />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-center text-3xl">
            Teacher
          </div>
          <div className="mt-5 ml-5">
            <li>Upload notes for your students to refer</li>
            <li>Clear your students doubts and make their future bright</li>
            <div className='text-xl text-center mt-5'>
              Want to help your students? Join as a teacher
            </div>
            <div className="mt-3 flex bg-blue-600 m-auto justify-center rounded-lg hover:bg-blue-500 w-28 h-10 cursor-pointer">
              <button>Get Started</button>
            </div>  
          </div>
        </div>
      </div>
      <div className='flex justify-center flex-row'>
        
        <div className="flex-1">
          <div className="text-center text-3xl">
            Student
          </div>
          <div className="mt-5 ml-5">
            <li>Get your notes all at a single place</li>
            <li>Clear your doubts without any hesitation</li>
            <div className='text-xl text-center mt-5'>
              Read from your notes and ask your doubts without hesitation
            </div>
            <div className="mt-3 flex bg-blue-600 m-auto justify-center rounded-lg hover:bg-blue-500 w-28 h-10 cursor-pointer">
              <button>Get Started</button>
            </div>  
          </div>
        </div>
        <div className="flex-1">
          <div className="h-full w-96 m-auto justify-center">
            <img className='' src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
