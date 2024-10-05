import { createContext, useContext, useEffect, useState } from "react";

const TokenContext = createContext();

export const TokenContextProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null); // New state for error handling
  const [mathScoreState, setMathScoreState] = useState(false)

  useEffect(() => {

    const storedToken = localStorage.getItem('ACCESSTOKEN');
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    } else {
      setToken('');
      setIsLoggedIn(false);
    }

    const getAllUserData = async () => {
      if (storedToken) {
        try {
          const bearerToken = `Bearer ${storedToken}`;
          const res = await fetch('http://localhost:5000/api/auth/get-all-user-data', {
            method: 'POST',
            headers: { "Authorization": bearerToken }
          });

          if (!res.ok) {
            throw new Error('Failed to fetch user data');
          }

          const data = await res.json();
          setUserData(data);
          setMathScoreState(false)
        } catch (error) {
          console.log("Error in getting all user data", error);
        }
      }
    };
    getAllUserData().finally(() => setLoading(false));
  }, [token,isLoggedIn,mathScoreState]);

  return (
    <TokenContext.Provider value={{ token, setToken, setIsLoggedIn, isLoggedIn, loading, userData, error,setMathScoreState }}>
      {children}
    </TokenContext.Provider>
  );
};

export const UseTokenContext = () => {
  return useContext(TokenContext);
};
