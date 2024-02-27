import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { useUserContext } from './User/userContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const { SetLogin } = useUserContext();
    const token = Cookies.get('jwtToken');
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
        Cookies.remove('jwtToken');
        sessionStorage.clear('userData');
        SetLogin(false);
      return <Navigate to="/login" />;
    }
  } else {
    return <Navigate to="/login" />;
  }
  return <Outlet/>;
};

export default ProtectedRoute;
