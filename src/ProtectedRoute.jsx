import React, { useEffect} from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { useUserContext } from './Contexts/userContext';
import { loginUser } from './Services/UserService';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const { setLogin } = useUserContext();
    const token = Cookies.get('jwtToken');
    const location = useLocation();
    const loginType = Cookies.get('loginType');
    useEffect(() => {
      sessionStorage.setItem('prevLocation', location.pathname);
    }, [location]);

  if (loginType === 'googleLogin'){
    //TODO
  }
  else if(loginType === 'formLogin'){
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        const user = {
          jwtToken: token,
          uniqueToken: Cookies.get('uniqueToken')
        };
        loginUser(JSON.stringify(user), "refresh")
          .then((response) => {
            console.log(response)
            if(response.data){
            Cookies.set('jwtToken', response.data.jwtToken);
            Cookies.set('uniqueToken', response.data.uniqueToken);
            setLogin(true);
            return <Outlet/>;
            }
            else{
              throw new Error('token expired, login again');
            }        
          })
          .catch((err) => {
          console.log(err);
          Cookies.remove('jwtToken');
          sessionStorage.clear('userData');
          setLogin(false);
        return <Navigate to="/login" />;
      });
      }  
    } else {
      return <Navigate to="/login" />;
    }
  }
  return <Outlet/>;
};

export default ProtectedRoute;
