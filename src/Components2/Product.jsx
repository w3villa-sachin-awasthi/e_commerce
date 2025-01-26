import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../Config/redux/slices.js/addTocartReducer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import { productCategory } from '../Config/data';
function Product() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.allProduct.value);
    // console.log(id," product ",allProducts)
    useEffect(() => {
        const fetchProduct = async () => {

            if(id>=30&&id<=34){
            
             for(let i=0;i<productCategory.length;i++){
               
                if(productCategory[i].id===Number(id)){
                    
                     setProduct(productCategory[i]);
                     return ;
                }
               
             }
             console.log("try again ")
             return ;
            //    setProduct(productCategory[id]);
            }
            if (id && allProducts.length > 0) {
                const selectedProduct = allProducts.find(product => product.id === parseInt(id));
              
                if (selectedProduct) {
                    setProduct(selectedProduct);
                }
            } else if (id) {
                try {
                  
                    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                    setProduct(response.data); // Un-comment this line to update the state
                   
                } catch (error) {
                    alert("Error fetching the product");
                }
            }
        };
    
        fetchProduct();
    }, [id, allProducts]); 
    if (!product) {
        return <Loader/>
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="flex justify-center h-[400px] sm:h-auto">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg"
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.title}</h1>
                    <p className="text-lg text-gray-500 mb-4">{product.category}</p>
                    <p className="text-xl text-gray-900 font-bold mb-6">${product.price}</p>
                    <p className="text-base text-gray-600 mb-4">{product.description}</p>

                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500 text-lg">
                            {'★'.repeat(Math.floor(product.rating?.rate))}
                            {'☆'.repeat(5 - Math.floor(product.rating?.rate))}
                        </span>
                        <span className="ml-2 text-gray-500 text-sm">({product.rating?.count} reviews)</span>
                    </div>

                    <button
                        onClick={() => dispatch(addProduct(product))}
                        className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300">
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Product;
