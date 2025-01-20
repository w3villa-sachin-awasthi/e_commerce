import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({component}) {
    const navigate=useNavigate();
 let check=JSON.parse(localStorage.getItem('user'));
 if(!check||!check.name||!check.email){
    navigate('/')
 }else{
    return component;
 }
  
  

}

export default ProtectedRoute