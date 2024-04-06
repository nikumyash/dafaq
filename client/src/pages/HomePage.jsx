import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useAuth0} from '@auth0/auth0-react';

const HomePage = () => {
  const {getAccessTokenSilently} = useAuth0();
  return (
    <> 
        {/* <button onClick={async ()=>{
          const token = await getAccessTokenSilently();
          fetch("http://localhost:6969/",{
            headers:{
              Authorization: `Bearer ${token}`,
            }
          }).then(res=>res.text()).then(data=>console.log(data));
        }}>
          Submit Button
        </button> */}
        <Navbar/>
        <Hero/>
        <Footer/>
    </>
  )
}

export default HomePage