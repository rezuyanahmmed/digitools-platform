import { useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import Banner from "./Components/navbar/Banner";
import States from "./Components/navbar/States";
import Cart from "./Components/navbar/Cart"; // Premium এর বদলে Cart ব্যবহার করুন
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bannerPhoto from "./assets/banner.png";

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
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">Get Started in 3 Steps</h1>
          <p>Start using premium digital tools in minutes, not hours.</p>
        </div>
        {/* 1st */}
        <div className="flex w-[80%] mx-auto space-x-3">
          <div className="card w-96 bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Large Card</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="card w-96 bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Large Card</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="card w-96 bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Large Card</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;