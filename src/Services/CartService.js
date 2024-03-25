import axios from "axios";

function addToCart(inventoryRequest){
    return axios.post("http://localhost:8082/cart/addToCart", inventoryRequest);
}
export {addToCart}