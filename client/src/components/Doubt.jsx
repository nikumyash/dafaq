import axios from "axios"
import {useAuth0} from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";
const Doubt = ({id,text}) => {
  const {user,getAccessTokenSilently} = useAuth0();
  const navigateTo = useNavigate();
  const handleDoubt = async()=>{
    const token = await getAccessTokenSilently();
        const base = import.meta.env.VITE_SERVER_URL
        axios.post(base+"/doubt/"+id+"/reply",{
            //remaining
        },{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }).then(()=>{
            navigateTo("/classroom/manage");
        }).catch(err=>console.log(err));
  }
  return (
      <div className="border rounded-lg relative hover:shadow-xl hover:shadow-orange-600	 h-80 w-72 p-6 m-6 text-white">
        <p className='text-md'>{text}</p>
        <div onClick={()=>handleDoubt()} className="h-10 w-28 m-8 cursor-pointer flex absolute right-0 bottom-0 bg-red-600 justify-center items-center hover:opacity-80">Reply</div>
      </div>
  )
}

export default Doubt