import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useAuth0, withAuthenticationRequired} from '@auth0/auth0-react';
import ClassCard from '../components/ClassCard';

const ManageClassroom = () => {
    const[classrooms, setClassrooms] = useState([]);
    const {isAuthenticated,user,getAccessTokenSilently} = useAuth0();
    console.log(classrooms);
    useEffect(()=>{
      const fetchClassroom = async ()=>{
        const base = import.meta.env.VITE_SERVER_URL
        if(isAuthenticated){
          const token = await getAccessTokenSilently();
          await axios.post(base+"/classroom",{
              email:user?.email,
          },{
            headers: {
                Authorization: `Bearer ${token}`
            }
          }).then((res)=>{
              setClassrooms(res.data.data);
          }).catch(err=>console.log(err));
        }
      }
      fetchClassroom();
    },[isAuthenticated])
  return (
    <div className='flex flex-wrap'>
      {
        classrooms && classrooms.map((e,i)=><ClassCard key={i} title={e.name} url={e.url}/>)
      }
      <Link to="/classroom/new">
          <div className='border rounded-xl flex my-10 mx-6 h-60 w-48 flex-col text-white cursor-pointer hover:opacity-80'>
              <div className="h-40 w-40 rounded-full m-auto text-[100px] text-center">+</div>
          </div>
      </Link>
    </div>
  )
}

export default withAuthenticationRequired(ManageClassroom, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});