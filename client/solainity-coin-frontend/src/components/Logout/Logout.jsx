import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseTokenContext } from '../Context/useContext';

export const Logout = () => {
    const {isloggedIn, setIsLoggedIn} = UseTokenContext();

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('ACCESSTOKEN');
        setIsLoggedIn(false);
        navigate('/login');
    },[])

    return null
}