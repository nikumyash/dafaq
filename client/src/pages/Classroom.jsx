import { useEffect, useState } from 'react'
import { MdAccountCircle } from "react-icons/md";
import Doubt from '../components/Doubt';
import {useAuth0} from '@auth0/auth0-react';
import { useParams } from 'react-router-dom';

const Classroom = () => {
    const {user,getAccessTokenSilently} = useAuth0();
    const {id} = useParams();
    const [inputText,setInputText] = useState([])
    const [doubt,setDoubt] = useState("")
    const saveHandler = () =>{
        setDoubt((prevdoubts) => [
            ...prevdoubts,{
                text: inputText
            }
        ])
        setInputText("")
    };
    useEffect (() => {
        const data = JSON.parse(localStorage.getItem("Doubts"))
        if(data){
            setDoubt(data)
        }
    },[])
    useEffect(() => {
        window.localStorage.setItem("Doubts",JSON.stringify(doubt))
    },[doubt])
    return (
    <div>
        <h1 className='text-white text-4xl m-8 mt-4'>Doubts Manager</h1>
        <div className="h-60 w-52 border rounded-lg m-8  text-white">
            <MdAccountCircle className='h-40 w-40 m-auto mt-6' />
            <h2 className='flex justify-center mt-4'>Balaji Chaugule</h2>
        </div>
        <div className="text-white">
            <h1 className='text-3xl m-8 mb-4'>Doubts : </h1>
            <div className="flex mx-8"><textarea className=' w-96 bg-zinc-900 border-b-[1px] p-4' placeholder='Enter your doubt here... ' cols="30" rows="10" maxLength={255}></textarea></div>
            <div className="h-8 w-36 rounded flex justify-center items-center cursor-pointer hover:opacity-85 m-8 mt-4 bg-red-600" onClick={saveHandler}>Create a post</div>
        </div>
        <div className='flex flex-wrap'>
        {
            doubt && doubt.map((doubt)=>(
                <Doubt key={doubt.id} text={doubt.text}></Doubt>
            ))
        }
        </div>
    </div>
  )
}

export default Classroom


