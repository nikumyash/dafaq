import img from '../assets/1.jpg'
<<<<<<< HEAD
import hero from '../assets/hero.png'
import student from '../assets/student.png'
import teacher from '../assets/teacher.png'

=======
import { useAuth0 } from '@auth0/auth0-react';
>>>>>>> acfd71a6b5f3efffa313b396dfb2fa8abe383377
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
          Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.Help the students to clear their doubts and lead them to a bright future. Students can freely ask their doubts and get them cleard on this platform.
          </div>
        </div>
        <div className="flex-1 ">
          <div className="h-full w-96 m-auto justify-center">
            <img className='' src={hero} alt="" />
          </div>
        </div>
      </div>

      <div className='flex justify-center flex-row mt-10'>
          <div className="flex-1">
            <div className="h-full w-96 m-auto justify-center">
              <img className='' src={teacher} alt="" />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-center text-3xl mt-16">
              Teacher
            </div>
            <div className="mt-5 ml-5 ">
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

      <div className='flex justify-center flex-row mt-16'>
        
          <div className="flex-1">
            <div className="text-center text-3xl ">
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
              <img className='' src={student} alt="" />
            </div>
          </div>
      </div>
    </div>
    
  )
}

export default Hero
