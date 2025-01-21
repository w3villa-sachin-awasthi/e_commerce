import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ component }) {
   
   const navigate = useNavigate();
   let check = JSON.parse(localStorage.getItem('user'));
   useEffect(() => {
      if (!check || !check.name || !check.email) {
         navigate('/')
      }
   }, [navigate, check])
   return check && check.name && check.email ? component : null;


}

export default ProtectedRoute;