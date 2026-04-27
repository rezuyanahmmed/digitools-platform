import { useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import Banner from "./Components/navbar/Banner";
import States from "./Components/navbar/States";
import Cart from "./Components/navbar/Cart"; // Premium এর বদলে Cart ব্যবহার করুন
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bannerPhoto from "./assets/banner.png";

import Started from "./Components/navbar/Started";
import Pricing from "./Components/navbar/Pricing";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      {/* <Navbar cartCount={cartItems.length} />
      <Banner /> */}

      <Navbar cartCount={cartItems.length}></Navbar>
      <Banner bannerImg={bannerPhoto}></Banner>
      <States />
      <Cart cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}></Cart>

      <Started></Started>
      <Pricing></Pricing>

      {/* Footer */}
      <footer className="h-[300px] mt-20 bg-gradient-to-r from-[#642ef7] to-purple-600 footer footer-horizontal footer-center bg-primary text-primary-content p-10">
        <div>
          <h1 className="font-bold text-2xl text-white">Ready to Transform Your Workflow?</h1>
          <p>Join thousands of professionals who are already using Digitools to work smarter.
            Start your free trial today.</p>
        </div>
        <nav>
          <div className="grid grid-flow-col gap-4 -mt-14">
            <button class="btn bg-white rounded-full">Explore Products</button>
            <button className="btn btn-outline btn-primary rounded-full text-white border-white">View Pricing</button> 

          </div>
          <p className="text-white mt-2">14-day free trial • No credit card required • Cancel anytime</p>
        </nav>
      </footer >


    </>
  );
}

export default App;