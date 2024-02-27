import axios from "axios";

function  loginUser(user, action){
    switch (action) {
        case "Login":
            return axios.post('http://localhost:8085/auth/login', user);
        case "Sign up":
            return axios.post('http://localhost:8085/auth/register', user);
        case "google":
            return axios.post('http://localhost:8085/auth/google', user);
        case "refresh":
            return axios.post('http://localhost:8085/auth/refreshToken', user);
        default:
      }
    }
export {loginUser}




  