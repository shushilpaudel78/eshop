'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

type CartItem = {
  name: string;
  price: number;
  photo: string;
  quantity: number;
};

export default function Checkout() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(stored);
  }, []);

  // Update localStorage and state
  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated')); // Notify navbar
  };

  const handleQtyChange = (index: number, delta: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + delta);
    updateCart(updatedCart);
  };

  const handleDelete = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 pt-[100px]">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6 flex  flex-col justify-center">

              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex  items-center justify-between border-b pb-4 gap-4"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-4 w-full">
                    <Image
                      src={item.photo}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="rounded w-16 h-16 object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded">
                    <button
                      onClick={() => handleQtyChange(index, -1)}
                      className="text-gray-600 hover:text-black"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="px-2 font-medium">{item.quantity}</span>
                    <button
                      onClick={() => handleQtyChange(index, 1)}
                      className="text-gray-600 hover:text-black"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>

                  {/* Total Price & Delete */}
                  <div className="text-right w-full flex gap-3 justify-end h-full items-center px-5 ">
                    <p className="text-gray-800 font-semibold h-full">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500  h-full hover:text-red-700 text-sm mt-1 flex items-center gap-1"
                    >
                      <FaTrash /> 
                    </button>
                  </div>


                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="mt-8 border-t text-right">
              <h2 className="text-xl font-bold text-gray-800">
                Total: ${total.toFixed(2)}
              </h2>

              <button
                onClick={() => alert('Order placed!')}
                className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition"
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
