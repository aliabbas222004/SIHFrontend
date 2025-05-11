import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const navigate=useNavigate();
    useEffect(() => {

        localStorage.removeItem('userToken'); 
    
        navigate('/');
      }, [navigate]);
  return null;
}

export default LogOut
