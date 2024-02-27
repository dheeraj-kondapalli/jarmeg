// UserContext.js
import React, { createContext, useState, useEffect, useContext} from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [login, SetLogin] = useState(sessionStorage.getItem('login') === 'true');

  useEffect(() => {
    // Load user data from session storage on component mount
    const storedUserData = sessionStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    else{
        setUserData([]);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData, login, SetLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
