import React from 'react'
import CartItem from '@/common/CartItem';

export const CartGrid = () => {

    const cartItems = [
        {
            name: "Vivo",
            price: 29.99,
            photo: "/images/mobile1.png"
        },
        {
            name: "Vivo Galaxy",
            price: 49.99,
            photo: "/images/mobile2.png"
        },
        {
            name: "Vivo Prime",
            price: 19.99,
            photo: "/images/mobile3.png"
        },
        {
            name: "Vivo Light",
            price: 39.99,
            photo: "/images/mobile4.png"
        },
        {
            name: "Vivo",
            price: 24.99,
            photo: "/images/mobile1.png"
        },
        {
            name: "Vivo Light",
            price: 59.99,
            photo: "/images/mobile2.png"
        },
    ];


    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h2 className="text-2xl font-bold mb-6">Your Shopping Cart</h2>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cartItems.map((item, index) => (
                        <CartItem
                            key={index}
                            name={item.name}
                            price={item.price}
                            photo={item.photo}

                        />
                    ))}

                </div>
            </div>

        </div>
    )
}
