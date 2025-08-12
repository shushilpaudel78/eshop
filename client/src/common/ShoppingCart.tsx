// components/CartItem.tsx
'use client';

import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

type CartItemProps = {
  name: string;
  price: number;
  photo: string;
};

export default function CartItem({ name, price, photo }: CartItemProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQtyChange = (delta: number) => {
    setQuantity((prev) => Math.max(prev + delta, 1));
  };

  const handleAddToCart = () => {
    const newItem = { name, price, photo, quantity };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingIndex = existingCart.findIndex(
      (item: any) => item.name === name
    );

    if (existingIndex !== -1) {
      existingCart[existingIndex].quantity += quantity;
    } else {
      existingCart.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Notify other components like Navbar
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="flex w-full flex-col bg-white p-4 border border-pink-500 rounded-lg shadow-md max-w-2xl mx-auto">
      {/* Product Info */}
      <div className="flex flex-col items-center gap-4">
        <Image
          src={photo}
          width={80}
          height={80}
          alt="photo"
          className="w-20 h-20 object-cover rounded-md"
        />
        <div className="text-center">
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-gray-500 text-sm">${price}</p>
        </div>
      </div>

      {/* Quantity & Actions */}
      <div className="flex flex-col items-center gap-6 mt-4">
        <div className="flex items-center bg-gray-100 rounded px-2 py-1">
          <button
            onClick={() => handleQtyChange(-1)}
            className="p-1 text-gray-600 hover:text-black"
          >
            <FaMinus size={12} />
          </button>
          <span className="px-3">{quantity}</span>
          <button
            onClick={() => handleQtyChange(1)}
            className="p-1 text-gray-600 hover:text-black"
          >
            <FaPlus size={12} />
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Add to Cart
        </button>

        <div className="text-right">
          <p className="font-semibold">${(price * quantity).toFixed(2)}</p>
          <button className="text-red-500 hover:text-red-700 mt-1">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
