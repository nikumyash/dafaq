import { useEffect, useState } from 'react'
import { MdAccountCircle } from "react-icons/md";
import Doubt from '../components/Doubt';
import {useAuth0, withAuthenticationRequired} from '@auth0/auth0-react';
import { useParams } from 'react-router-dom';
import axios from "axios"

const Classroom = () => {
    const {isAuthenticated,user,getAccessTokenSilently} = useAuth0();
    const {id} = useParams();
    const [doubt,setDoubts] = useState([]);
    const [clsn,setClsn] = useState("");
    const [text,setText] = useState("");
    const base = import.meta.env.VITE_SERVER_URL
    
    useEffect(()=>{
      const fetchClassroom = async ()=>{
        if(isAuthenticated && user){
          const token = await getAccessTokenSilently();
          await axios.post(base+"/classroom/"+id+"?mail="+user?.email,null,{
            headers: {
                Authorization: `Bearer ${token}`
            }
          }).then((res)=>{
              setDoubts(res.data.doubts);
              setClsn(res.data.classroom_name);
          }).catch(err=>console.log(err));
        }
      }
      fetchClassroom();
    },[isAuthenticated]);

    const handleDoubt = async ()=>{
        const token = await getAccessTokenSilently();
        await axios.post(base+"/doubt/new",{
            mail:user.email,
            text:text,
            cls_url:id
        },{
            headers: {
                Authorization: `Bearer ${token}`
            }
          }).then(()=>{
                console.log("done");
                window.location.reload();
          }).catch(err=>console.log(err));
    }
    return (
    <>
        <div className='flex flex-col md:flex-row'>
            <div className="h-60 w-52 border rounded-lg m-8  text-white">
                <MdAccountCircle className='h-40 w-40 m-auto mt-6' />
                <h2 className='flex justify-center mt-4'>{clsn}</h2>
            </div>
            <div className="text-white">
                <h1 className='text-xl m-8 mb-4'>Have a doubt?</h1>
                <div className="flex mx-8"><textarea value={text} onChange={(e)=>setText(e.target.value)} className=' w-96 bg-zinc-900 outline-none border-b-[1px] p-4' placeholder='Enter your doubt here... ' cols="30" rows="10" maxLength={255}></textarea></div>
                <div className="h-8 w-36 rounded flex justify-center items-center cursor-pointer hover:opacity-85 m-8 mt-4 bg-red-600" onClick={()=>handleDoubt()}>Submit</div>
            </div>
        </div>
            <h1 className='text-white text-3xl p-4'>
                Doubts:-
            </h1>
            <div className='flex flex-wrap'>
            {
                doubt && doubt.map((doubt,i)=>(
                    <Doubt key={i} solution={doubt.solution} id={doubt._id} text={doubt.text}></Doubt>
                ))
            }
            </div>
    </>
  )
}

export default withAuthenticationRequired(Classroom, {
    onRedirecting: () => <div>Redirecting you to the login page...</div>,
  });


