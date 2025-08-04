import React from 'react'
import ShoppiningCart from '@/common/ShoppingCart'

export const CartGrid = () => {

    const cartItems = [
        {
            name: "Product 1",
            price: 29.99,
            image: "/images/cart.jpg"
        },
        {
            name: "Product 2",
            price: 49.99,
            image: "/images/cart1.jpg" 
        },
        {
            name: "Product 3",
            price: 19.99,
            image: "/images/cart1.jpg"
        },
        {
            name: "Product 4",
            price: 39.99,
            image: "/images/cart1.jpg"
        },
        {
            name: "Product 5",
            price: 24.99,
            image: "/images/cart1.jpg"
        },
        {
            name: "Product 6",
            price: 59.99,
            // image: "/images/cart1.jpg"
        }
    ];


    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h2 className="text-2xl font-bold mb-6">Your Shopping Cart</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cartItems.map((item, index) => (
                        <ShoppiningCart
                            key={index}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    ))}

                </div>
            </div>

        </div>
    )
}
