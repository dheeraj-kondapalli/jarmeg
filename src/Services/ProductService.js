import axios from "axios";

function getProduct(productId){
    return axios.get(`http://localhost:8083/products/product/${productId}`);
}
export {getProduct}