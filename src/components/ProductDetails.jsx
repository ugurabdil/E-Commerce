import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../css/ProductDetails.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import {addToBasket, calculateBasket} from '../redux/slices/basketSlice';



function ProductDetails() {
  
    const {id}=useParams();
    const {products, selectedProduct}= useSelector((store)=>store.product)
    
    const {price, image, title, description}=selectedProduct;
    
    const [count ,setCount]=useState(0);
    
    const dispatch=useDispatch();

    const increment=()=>{
        setCount(count+1);
    }
  
    const decrement=()=>{
      if(count>=1)
      setCount(count-1);
    }

    const addBasket=()=>{
        const payload={
          id,
          price,
          image,
          title,
          count,
          description
        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket())
    }

    useEffect(()=>{
        getProductById()

    },[])


    const getProductById=()=>{
        products && products.map((product)=>{
            if(product.id==id){
                dispatch(setSelectedProduct(product));
            } 
        })
    }

  return (
    <div className='details-container'>
      <div className='details-container-child-1'>
      <img src={image} width={300} height={500} alt="" />
      </div>
      <div className='details-container-child-2'>
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>{price} ₺</h3>
        <div className='details-count-btn'>
        <CiCircleMinus onClick={decrement}/><span>{count}</span> <CiCirclePlus onClick={increment}/> 

        </div>
        <div className='details-basket-btn'><button onClick={addBasket}>Sepete Ekle</button></div>
      </div>
    </div>
  )
}

export default ProductDetails
