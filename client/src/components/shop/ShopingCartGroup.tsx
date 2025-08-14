'use client';
import React, { useState } from "react";
import ShopingCart from "@/common/ShoppingCart";

export const ShopingCartGroup = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const cartItems = [
    { name: "Product 1", price: 29.99, photo: "/images/cart.jpg" },
    { name: "Product 2", price: 49.99, photo: "/images/cart.jpg" },
    { name: "Product 3", price: 19.99, photo: "/images/cart.jpg" },
    { name: "Product 4", price: 39.99, photo: "/images/cart.jpg" },
    { name: "Product 5", price: 24.99, photo: "/images/cart.jpg" },
    { name: "Product 6", price: 59.99, photo: "/images/cart.jpg" },
  ];

  // Filter items based on search term
  const filteredItems = cartItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-30">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Shopping Cart</h2>

      {/* Search Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center py-5 gap-4">
        <h1 className="text-black text-2xl">Search Item</h1>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded px-4 py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={() => setSearchTerm(searchTerm)} // Keeps search on button click
          >
            Search
          </button>
        </div>
      </div>

      {/* Cart Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <ShopingCart
              key={index}
              name={item.name}
              price={item.price}
              photo={item.photo}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No items found
          </p>
        )}
      </div>
    </div>
  );
};
