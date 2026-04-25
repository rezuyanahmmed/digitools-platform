import { useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import Banner from "./Components/navbar/Banner";
import States from "./Components/navbar/States";
import Cart from "./Components/navbar/Cart"; // Premium এর বদলে Cart ব্যবহার করুন
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bannerPhoto from "./assets/banner.png";
import userImg from "./assets/user.png";
import packageImg from "./assets/package.png";
import rocketImg from "./assets/rocket.png";

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

      {/* Get started section */}
      <div className="mt-7">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">Get Started in 3 Steps</h1>
          <p>Start using premium digital tools in minutes, not hours.</p>
        </div>
        {/* 1st */}
        <div className="flex w-[80%] mx-auto space-x-3 mt-7">
          <div className="card w-96 bg-base-100 card-lg shadow-sm">
            <div className="card-body flex justify-center items-center">
              <img className="h-12 w-12 bg-purple-200 p-2 rounded-full" src={userImg} alt="" />
              <h4 className="font-bold ">Create Account</h4>
              <p className="text-gray-600">Sign up for free in seconds. No credit card required to get started.</p>
            </div>
          </div>
          {/* 2nd */}
          <div className="card w-96 bg-base-100 card-lg shadow-sm">
            <div className="card-body flex justify-center items-center">
              <img className="h-12 w-12 bg-purple-200 p-2 rounded-full" src={packageImg} alt="" />
              <h4 className="font-bold ">Choose Products</h4>
              <p className="text-gray-600">Browse our catalog and select the tools that fit your needs.</p>
            </div>
          </div>
          {/* 3rd */}
          <div className="card w-96 bg-base-100 card-lg shadow-sm">
            <div className="card-body flex justify-center items-center">
              <img className="h-12 w-12 bg-purple-200 p-2 rounded-full" src={rocketImg} alt="" />
              <h4 className="font-bold ">Start Creating</h4>
              <p className="text-gray-600">Download and start using your premium tools immediately.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;