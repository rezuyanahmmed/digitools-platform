import React, { useState } from 'react';
import productsData from "../../Data/Product.json"; // তোমার ফোল্ডার পাথ অনুযায়ী চেক করো
import { toast } from "react-toastify";

const Cart = ({ cartItems, onAddToCart, onRemoveFromCart, onCheckout }) => {
  const [activeTab, setActiveTab] = useState("products");

  const tagColors = {
    popular: "bg-blue-100 text-blue-700",
    new: "bg-green-100 text-green-700",
    "best seller": "bg-yellow-100 text-yellow-700",
  };

  // Add to Cart Function with Toast
  const handleAdd = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      toast.warning(`${product.name} অলরেডি কার্টে আছে!`);
      return;
    }
    onAddToCart(product);
    toast.success(`${product.name} কার্টে যোগ হয়েছে! 🎉`);
  };

  // Remove Function with Toast
  const handleRemove = (product) => {
    onRemoveFromCart(product.id);
    toast.error(`${product.name} কার্ট থেকে রিমুভ করা হয়েছে।`);
  };

  // Checkout Function with Toast
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warning("আপনার কার্ট খালি!");
      return;
    }
    onCheckout();
    toast.success("চেকআউট সফল হয়েছে! 🛍️ ধন্যবাদ!");
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="py-16 px-4 bg-white w-[80%] mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
          Premium Digital Tools
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Choose from our curated collection of premium digital products.
        </p>

        {/* --- Toggling Buttons --- */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-2 rounded-full font-semibold transition ${activeTab === "products"
              ? "bg-purple-600 text-white shadow"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-6 py-2 rounded-full font-semibold transition ${activeTab === "cart"
              ? "bg-purple-600 text-white shadow"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            Cart ({cartItems.length})
          </button>
        </div>

        {/* --- Product Cards Section --- */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="border rounded-2xl p-6 shadow hover:shadow-xl transition relative bg-white flex flex-col"
              >
                <span
                  className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${tagColors[product.tagType] || "bg-gray-100 text-gray-600"
                    }`}
                >
                  {product.tag}
                </span>
                <div className="text-4xl mb-3">{product.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                <p className="text-3xl font-extrabold text-gray-800 mb-4">
                  ${product.price}
                  <span className="text-sm font-normal text-gray-400">/{product.period}</span>
                </p>
                <ul className="mb-6 space-y-2 flex-1">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-purple-500">✔</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleAdd(product)}
                  className="w-full bg-purple-600 text-white py-2 rounded-full font-semibold hover:bg-purple-700 transition"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        )}

        {/* --- Cart Section --- */}
        {activeTab === "cart" && (
          <div className="max-w-2xl mx-auto border rounded-2xl p-6 shadow">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h3>
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-400 py-10 text-lg">
                🛒 Your cart is empty. Add some products!
              </p>
            ) : (
              <>
                <div className="space-y-3 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b pb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-700">{item.name}</p>
                          <p className="text-sm text-gray-400">${item.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemove(item)}
                        className="text-red-500 font-semibold hover:underline text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between font-bold text-gray-800 text-lg mb-4">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-purple-600 text-white py-3 rounded-full font-bold hover:bg-purple-700 transition"
                >
                  Proceed To Checkout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;