import axios from "axios";

function  loginUser(user, action){
        return axios.post(`http://localhost:8085/auth/${action === "Login" ? "login" : "register"}`, user);
    }
export {loginUser}
