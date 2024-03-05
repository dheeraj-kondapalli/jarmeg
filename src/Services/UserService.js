import axios from "axios";
import Cookies from "js-cookie";

function  loginUser(user, action){
    switch (action) {
        case "Login":
            return axios.post('http://localhost:8085/auth/login', user,{
                headers: {
                  'Token-Type': 'Generate',
                  'Content-Type': 'application/json'
                }
              });
        case "Sign up":
            return axios.post('http://localhost:8085/auth/register', user, {
                headers: {
                  'Token-Type': 'Generate',
                  'Content-Type': 'application/json'
                }
              });
        case "google":
            return axios.post('http://localhost:8085/auth/google', user);
        case "refresh":
            return axios.post('http://localhost:8085/auth/refreshToken', user, {
                headers: {
                  'Authorization': 'Bearer ' + Cookies.get('uniqueToken'),
                  'Token-type': 'Refresh',
                  'Content-Type': 'application/json'
                }
              });
        default:
      }
    }
export {loginUser}




  