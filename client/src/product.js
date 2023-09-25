import React from 'react'
import { useEffect, useState } from 'react';
import { BASE_URL } from './configs/config';
import axios from 'axios';

const Product = () => {
    const [products,setProduct] = useState([])

    const getProduct = async () => {
      try {
        const response = await axios.get(BASE_URL);
        console.log('response: ', response);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    useEffect(()=>{
      getProduct()
    },[])

  return (
    <div className="App">
        {products?.map((e)=>{
          return(
            <p>{e?.name}</p>
          )
        })}
    </div>
  )
}

export default Product
