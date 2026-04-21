import { useState } from 'react'

import './App.css'
import Navbar from './Components/navbar/Navbar'
import bannerImg from './assets/banner.png';

import Banner from './Components/navbar/Banner';
import States from './Components/navbar/States';
import Premium from './Components/navbar/Premium';

function App() {


  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      <Banner bannerImg={bannerImg} />
      <States></States>

      <Premium></Premium>
      <div>
        <h2>kshdf</h2>
      </div>
       
 



    </>
  )
}

export default App
