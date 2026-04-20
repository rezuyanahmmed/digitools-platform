import { useState } from 'react'

import './App.css'
import Navbar from './Components/navbar/Navbar'
import bannerImg from './assets/banner.png';

import Banner from './Components/navbar/Banner';

function App() {


  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      <Banner bannerImg={bannerImg} />





    </>
  )
}

export default App
