import React from 'react'
import "../css/Header.css";
import { SlBasket } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';



function Header() {

  const navigate=useNavigate();
  const dispatch=useDispatch()

  const {products}=useSelector((store)=>store.basket);

  return (
    <div className='header-container'>
        <div className='flex-row' onClick={()=>navigate('/')} >
            <img className='logo' src="./src/images/logo.png" alt="" />
            <p className='logo-text'>Sat/Al.com</p>
        </div>
        <div className='flex-row'>
            <input className='search-input' type="text" placeholder='Bir şeyler ara...' />
           <div>
           <Badge onClick={()=>dispatch(setDrawer()) }  badgeContent={products.length} color="error">
           <SlBasket style={{marginRight:'6px'}} className='icon'/>
            </Badge>
           
           </div>
        </div>
    </div>
  )
}

export default Header