import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const products = useSelector(state => state.cart.value);

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
            
            {products.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="flex flex-wrap justify-center gap-6">
                    {products.map((val) => (
                        <div key={val.id} className="bg-white shadow-md rounded-lg overflow-hidden p-4 max-w-xs hover:shadow-xl transition duration-300 flex flex-col">
                            
                            {/* Product Image */}
                            <img src={val.image} alt={val.title} className="w-full h-48 object-contain" />
                            
                            {/* Product Details */}
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">{val.title}</h2>
                                <p className="text-gray-500 text-sm">{val.category}</p>
                                
                                {/* Price & Rating */}
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-xl font-bold text-green-600">${val.price}</span>
                                    <span className="flex items-center text-yellow-500">
                                        ⭐ {val.rating?.rate} ({val.rating?.count})
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Cart;
