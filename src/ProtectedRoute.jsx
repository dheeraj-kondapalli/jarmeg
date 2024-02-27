import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { useUserContext } from './User/userContext';
import { loginUser } from './Services/UserService';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const { setLogin } = useUserContext();
    const token = Cookies.get('jwtToken');
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      const user = {
        jwtToken: token,
        uniqueToken: Cookies.get('uniqueToken')
      };
      try{
        console.log(JSON.stringify(user));
        loginUser(JSON.stringify(user), "refresh")
        .then((response) => {
          Cookies.set('jwtToken', response.data.jwtToken);
          Cookies.set('uniqueToken', response.data.uniqueToken);
          setLogin(true);
          return <Outlet/>;        
        });
      }catch (err){
        console.log(err);
        Cookies.remove('jwtToken');
        sessionStorage.clear('userData');
        setLogin(false);
      return <Navigate to="/login" />;
      }
    }
  } else {
    return <Navigate to="/login" />;
  }
  return <Outlet/>;
};

export default ProtectedRoute;
