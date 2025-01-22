import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addAllProduct } from './redux/slices.js/allProduct';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addLoading } from './redux/slices.js/Loading';
function ProtectedRoute({ component }) {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
   const [loading, setLoading] = useState(false);

   async function fetchProducts() {
      try {
         setLoading(true);
         dispatch(addLoading(true))
         // console.log("Loading... for");
         const response = await axios.get('https://fakestoreapi.com/products?limit=10');
         dispatch(addAllProduct(response.data));
         dispatch(addLoading(false))
         setLoading(false);
      } catch (error) {
         setLoading(false);
         alert("Error occurred while fetching products");
      }
   }

   useEffect(() => {
      async function checkUser() {
         if (!user || !user.name || !user.email) {
            navigate('/');
         } else {
            await fetchProducts();
         }
      }
      checkUser();
   }, [ user]);

   return user && user.name && user.email ? component : null;
}

export default ProtectedRoute;
