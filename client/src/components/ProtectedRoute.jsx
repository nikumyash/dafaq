import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const { isAuthenticated} = useAuth0();
    const navigateTo = useNavigate();
    if(!isAuthenticated){
        navigateTo("/");
    }
  return (
    <>{children}</>
  )
}

export default ProtectedRoute