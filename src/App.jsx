// import { useState } from 'react'

// import './App.css'
// import Navbar from './Components/navbar/Navbar'
// import bannerImg from './assets/banner.png';

// import Banner from './Components/navbar/Banner';
// import States from './Components/navbar/States';
// import Premium from './Components/navbar/Premium';

// function App() {


//   return (
//     <>
//       {/* Navbar */}
//       <Navbar></Navbar>

//       <Banner bannerImg={bannerImg} />
//       <States></States>

//       <Premium></Premium>
//       <div>
//         <h2>kshdf</h2>
//       </div>





//     </>
//   )
// }

// export default App


import { useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import Banner from "./Components/navbar/Banner";
import States from "./Components/navbar/States";
import Premium from "./Components/navbar/Premium";
import Steps from "./Components/navbar/Steps";
import Pricing from "./Components/navbar/Pricing";
import Footer from "./Components/navbar/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <States />
      <Premium
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      <Steps />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;