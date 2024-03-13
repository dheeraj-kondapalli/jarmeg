import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import "./style.css";
import { getProduct } from "../../Services/ProductService";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct(productId)
    .then((response) => {
      console.log(response);
      setProduct(response.data)
    });
  }, []);

  return (
  <div className="outerProductContainer">
  </div>

  );
};
export default ProductPage;