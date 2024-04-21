import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { useUserContext } from './Contexts/userContext';
import { loginUser } from './Services/UserService';
import axios from 'axios';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const { login, setLogin } = useUserContext();
    const token = Cookies.get('jwtToken');
    const location = useLocation();
    const loginType = Cookies.get('loginType');
    const [isAuthenticated, setIsAuthenticated] = useState(null); // State to store authentication status

    useEffect(() => {
        sessionStorage.setItem('prevLocation', location.pathname);
    }, [location]);

    useEffect(() => {
        console.log(login)
        if (loginType === 'googleLogin' && login === true) {
            const access_token = Cookies.get('googleAccessToken');
            axios.get(`https://oauth2.googleapis.com/tokeninfo?access_token=${access_token}`)
                .then((response) => {
                    console.log(response.data.expires_in);
                    setIsAuthenticated(response.data.expires_in > 0); // Set authentication status based on response
                })
                .catch((err) => {
                    console.log(err);
                    setIsAuthenticated(false); // Set authentication status to false in case of error
                });
        } else if (loginType === 'formLogin') {
            if (token) {
                const decodedToken = jwtDecode(token);
                if (decodedToken.exp * 1000 < Date.now()) {
                    const user = {
                        jwtToken: token,
                        uniqueToken: Cookies.get('uniqueToken')
                    };
                    // Using loginUser function, I assume it returns a Promise
                    loginUser(JSON.stringify(user), "refresh")
                        .then((response) => {
                            console.log(response);
                            if (response.data) {
                                Cookies.set('jwtToken', response.data.jwtToken);
                                Cookies.set('uniqueToken', response.data.uniqueToken);
                                setLogin(true);
                                console.log('exitedhere');
                                // If the token is refreshed successfully, allow access to the protected route
                                setIsAuthenticated(true);
                            } else {
                                throw new Error('Token expired, login again');
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                            Cookies.remove('jwtToken');
                            sessionStorage.clear('userData');
                            setLogin(false);
                            setIsAuthenticated(false);
                        });
                } else {
                    setIsAuthenticated(true); // Token is still valid, allow access to the protected route
                }
            } else {
                setIsAuthenticated(false); // No token found, redirect to login page
            }
        } else {
            setIsAuthenticated(false); // For other login types, assume authentication is true
        }
    }, [loginType, login]);

    if (isAuthenticated === null) {
        // Return null or a loading indicator while authentication status is being determined
        return null;
    }

    if (!isAuthenticated) {
        // If not authenticated, navigate to login page
        return <Navigate to="/login" />;
    }

    // Default case, allow access to the protected route
    return <Outlet />;
};

export default ProtectedRoute;
