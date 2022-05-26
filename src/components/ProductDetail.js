import React from "react";
import {useParams} from "react-router-dom";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";

function ProductDetail() {
    const {productId} = useParams();
    console.log(productId);
    const {
        state: { products },
      } = CartState();

     
    const prodDetails = products.find(prod => prod.id === productId);


        
    return (
        <div>
            <SingleProduct prod={prodDetails}/>
        </div>
    )
}

export default ProductDetail