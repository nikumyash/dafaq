import axios from "axios"
import {useAuth0} from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
const Doubt = ({id,text,solution}) => {
  const {user,getAccessTokenSilently} = useAuth0();
  const navigateTo = useNavigate();
  const [open,setOpen] = useState(false);
  const [reply,setReply] = useState("");
  const handleDoubt = async()=>{
    const token = await getAccessTokenSilently();
        const base = import.meta.env.VITE_SERVER_URL
        axios.post(base+"/doubt/"+id+"/reply",{
            text:reply
        },{
            headers:{ 
                Authorization: `Bearer ${token}`,
            }
        }).then((res)=>{
            window.location.reload();
        }).catch(err=>console.log(err));
  }
  const handleModal = ()=>{
    setOpen(!open);
  }
  return (
      <div className="border relative rounded-lg hover:shadow-xl hover:shadow-orange-600	 h-80 w-72 p-6 m-6 text-white">
        <p className='text-md'>{text}</p>
        <div onClick={()=>handleModal()} className="h-10 w-28 m-8 cursor-pointer flex absolute right-0 bottom-0 bg-red-600 justify-center items-center hover:opacity-80">{open?"Close":solution?"Read Reply":"Reply"}</div>
        {solution?(<div className={`absolute bg-orange-600 rounded-md border-white border-2 py-2 px-2 w-72 bottom-0 left-0 translate-y-16 ${(open)?"":" hidden "}`}>
            <h3 className="text-xl mb-2">Reply</h3>
            <p className="px-2 py-2 w-full bg-black rounded-md text-md">{solution}</p>
        </div>):<div className={`absolute bottom-0 left-0 translate-y-16 ${(open)?"":" hidden "}`}>
            <textarea placeholder="Enter a reply" value={reply} className="w-72 text-black p-4" onChange={(e)=>setReply(e.target.value)} maxLength={255}/>
            <div onClick={()=>handleDoubt()} className="absolute cursor-pointer bottom-0 right-0 translate-y-8 border-2 px-2 rounded-lg bg-orange-600 ">
                Ok
            </div>
        </div>}
      </div>
  )
}

export default Doubt