'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import Link from 'next/link';

type CartItem = {
  name: string;
  price: number;
  photo: string;
  quantity: number;
};

export default function Checkout() {
  const [esewaData, setEsewaData] = useState<any>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(stored);
  }, []);

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
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

  // Fetch Esewa data whenever total changes
  useEffect(() => {
    if (total > 0) {
      const fetchEsewaData = async () => {
        const res = await fetch(`/api/esewa`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: total,
            tax_amount: 0, // adjust if needed
          }),
        });
        const data = await res.json();
        setEsewaData(data);
      };
      fetchEsewaData();
    } else {
      setEsewaData(null); // hide Esewa form if cart is empty
    }
  }, [total]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 pt-[100px]">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6 flex flex-col justify-center">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-blue-500 border-b-2 last:border-none pb-4 gap-4"
                >
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
                      <p className="text-sm text-gray-600">Rs{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded">
                    <button onClick={() => handleQtyChange(index, -1)} className="text-gray-600 hover:text-black">
                      <FaMinus size={12} />
                    </button>
                    <span className="px-2 font-medium">{item.quantity}</span>
                    <button onClick={() => handleQtyChange(index, 1)} className="text-gray-600 hover:text-black">
                      <FaPlus size={12} />
                    </button>
                  </div>

                  <div className="text-right w-full flex gap-3 items-center justify-end px-5">
                    <p className="text-gray-800 font-semibold">
                      Rs {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700 flex items-center gap-1">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="mt-8 border-pink-500 border-t-2 text-right py-4">
              <h2 className="text-xl font-bold text-gray-800">
                Total: Rs{total.toFixed(2)}
              </h2>

              {/* Esewa Form (only shows when esewaData is ready) */}
              {esewaData && (
                <form
                target='_blank'
                  action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
                  method="POST"
                >
                  <input type="hidden" name="amount" value={esewaData.amount} />
                  <input type="hidden" name="tax_amount" value={esewaData.tax_amount} />
                  <input type="hidden" name="product_service_charge" value={esewaData.product_service_charge} />
                  <input type="hidden" name="product_delivery_charge" value={esewaData.product_delivery_charge} />
                  <input type="hidden" name="total_amount" value={esewaData.total_amount} />
                  <input type="hidden" name="transaction_uuid" value={esewaData.transaction_uuid} />
                  <input type="hidden" name="product_code" value={esewaData.product_code} />
                  <input type="hidden" name="success_url" value="http://localhost:3000/success" />
                  <input type="hidden" name="failure_url" value="http://localhost:3000/failure" />
                  <input type="hidden" name="signed_field_names" value={esewaData.signed_field_names} />
                  <input type="hidden" name="signature" value={esewaData.signature} />

                  <button
                    type="submit"
                    className="mt-4 bg-green-700 text-white px-6 py-2 rounded-lg"
                  >
                    Pay with eSewa
                  </button>
                </form>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
