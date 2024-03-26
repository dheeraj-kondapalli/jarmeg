import axios from "axios";    


function addToCart(inventoryRequest){
  var data = JSON.parse(sessionStorage.getItem('userData'));
  const headers = {
    'Content-Type': 'application/json',
    'userId': data.userId
  };
  return axios.post("http://localhost:8082/cart/addToCart", inventoryRequest, {headers});
}
function getCart(){
  var data = JSON.parse(sessionStorage.getItem('userData'));
  const headers = {
    'Content-Type': 'application/json',
    'userId': data.userId
  };
  return axios.get("http://localhost:8082/cart/getCart", {headers})
}
function removeItem(productIds){
  var data = JSON.parse(sessionStorage.getItem('userData'));
  const headers = {
    'Content-Type': 'application/json',
    'userId': data.userId,
    'productIds': productIds
  };
  return axios.delete("http://localhost:8082/cart/removeItem", {headers})
}
export {addToCart};
export {getCart};
export {removeItem};