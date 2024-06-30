import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'

import RouterConfig from './config/RouterConfig'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { FaRegTrashCan } from "react-icons/fa6";
import { margin, style } from '@mui/system'
import { calculateBasket, setDrawer } from './redux/slices/basketSlice'



function App() {

  const {products, drawer, totalAmount}=useSelector((store)=>store.basket);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(calculateBasket());
  }, [])

  return (
    <div>
     <PageContainer>
      <Header/>
      <RouterConfig/>
      <Drawer open={drawer} anchor='right' onClose={()=>dispatch(setDrawer())} >{
      
        products && products.map( (product)=>{
         
          return( 
            
              <div key={product.id} className='drawer-container' >
                <img src={product.image} alt={product.title} style={{width:'100px', height:'100px', boxShadow:'0px 0px 1px'}} /> 
            
                <p style={{width:'150px'}}>{product.title} </p>

                <p style={{width:'80px', margin:'0 10px'} }>{product.price} TL</p>

                <p style={{width:'70px', display:'flex ', flex:'row', alignItems:'center', }} > <button style={{cursor:'pointer'}}>-</button> <p style={{margin:'0 12px'}}>{ product.count}</p> <button style={{cursor:'pointer'}}>+</button></p>

                <p style={{marginLeft:'20px', fontSize:'18px',cursor:'pointer'}}>< FaRegTrashCan /></p>             
              </div>   
            
           
          )
        })
      }
      <div>
        <p style={{margin:'15px', fontSize:'20px'}}>
          Toplam Tutar: {totalAmount}
        </p>
      </div>
      </Drawer>
     </PageContainer>
    </div>
  )
}

export default App
