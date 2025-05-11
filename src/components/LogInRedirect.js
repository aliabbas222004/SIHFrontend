import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("userToken", token);
      navigate('/');
    }
  }, []);

  return <p>Logging you in...</p>;
};

export default LoginRedirect;
