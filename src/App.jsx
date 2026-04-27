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
import Ready from "./Components/navbar/Ready";

import { FiInstagram } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




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
      <Ready></Ready>

      {/* Footer */}
      <footer className="footer sm:footer-horizontal bg-[#101727] text-neutral-content p-10">
        <div className="w-[300px]">
          <h1 className="text-3xl text-white">DigiTools</h1>
          <p className="text-gray-400">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </div>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <div>
          <h2>Social Links</h2>
          <div className="flex gap-4">
            <a className="bg-white p-2 rounded-full text-black" href=""><FaFacebookSquare /></a>
            <a className="bg-white p-2 rounded-full text-black" href=""><FiInstagram /></a>
            <a className="bg-white p-2 rounded-full text-black" href=""><FaXTwitter /></a>
          </div>          
        </div>     
        
      </footer>
      

      <div className="flex justify-between bg-[#101727] h-[100px] pl-10">
      
        <p className="text-white">© 2026 Digitools. All rights reserved.</p>
        <div className="text-white pr-10">
          <a href="">Praivacy Policy</a>
          <a href="">Terms of Service</a>
          <a href="">Cookis</a>
        </div>
      </div>
     

    </>
  );
}

export default App;