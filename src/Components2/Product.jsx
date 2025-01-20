import React from 'react';
import { useSelector } from 'react-redux';

function Product() {
    const product = useSelector(state => state.product.value);
    
    if (!product) {
        return <div className="text-center py-10 text-xl">Product not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="flex justify-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg"
                    />
                </div>

                {/* Product Details */}
                <div>
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.title}</h1>
                    <p className="text-lg text-gray-500 mb-4">{product.category}</p>
                    <p className="text-xl text-gray-900 font-bold mb-6">${product.price}</p>
                    <p className="text-base text-gray-600 mb-4">{product.description}</p>

                    {/* Product Rating */}
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500 text-lg">
                            {'★'.repeat(Math.floor(product.rating.rate))}
                            {'☆'.repeat(5 - Math.floor(product.rating.rate))}
                        </span>
                        <span className="ml-2 text-gray-500 text-sm">({product.rating.count} reviews)</span>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
