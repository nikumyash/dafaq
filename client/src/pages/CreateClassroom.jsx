import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useAuth0, withAuthenticationRequired} from '@auth0/auth0-react';
import axios from "axios";
const CreateClassroom = () => {
    const [stud, setStud] = useState([]);
    const {user,getAccessTokenSilently} = useAuth0();
    const navigateTo = useNavigate();
    const [list,setList] = useState("");
    const RemStud = (e) => {
        setStud(stud.filter(mail => mail !== e));
    }
    const [names,setName] = useState("");
  return (
    <div className=" text-white bg-zinc-900">
        <h1 className='flex text-3xl px-10 py-6 justify-center'>Create Classroom</h1>
        <div className="flex flex-col justify-around ml-14 m-6">
                <div className="flex flex-col mb-6">
                    <h2>Enter Name of Classroom : </h2>
                    <input type="text" onChange={(e)=>setName(e.target.value)} className='border-b-2 outline-none w-72 h-8 bg-zinc-900' />
                </div>
                <div className="flex flex-col mb-6 left-0">
                    <h2>Add Students : </h2>
                    <div className="flex gap-6">
                        <input type="text" onChange={(e)=>{setList(e.target.value)}} className='border-b-2 outline-none w-72 h-8 bg-zinc-900' />
                        <div className="h-8 w-12 border rounded-md text-center cursor-pointer hover:opacity-70" onClick={()=>{setStud([...stud,list])}}>+</div>
                    </div>
                    <div className="">
                        {
                            stud && stud.map((e,i)=><div className='flex my-6 justify-between' key={i}><p>{e}</p><button onClick={()=>{RemStud(e)}}>Remove</button></div>)
                        }
                </div>
            </div>
            <div className="m-auto cursor-pointer border py-3 px-10" onClick={async ()=>{
                const token = await getAccessTokenSilently();
                const base = import.meta.env.VITE_SERVER_URL
                axios.post(base+"/classroom/new",{
                    teacherMail:user.email,
                    students:stud,
                    name:names
                },{
                    headers:{
                        Authorization: `Bearer ${token}`,
                    }
                }).then(()=>{
                    navigateTo("/classroom/manage");
                }).catch(err=>console.log(err));
            }}>Create</div>
        </div>
    </div>
  )
}
export default withAuthenticationRequired(CreateClassroom, {
    onRedirecting: () => <div>Redirecting you to the login page...</div>,
  });