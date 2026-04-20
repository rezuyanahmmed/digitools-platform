import React from 'react';

import { CiPlay1 } from "react-icons/ci";

const Banner = ({ bannerImg }) => {
  return (
    <div className="hero min-h-screen w-[80%] mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Banner"
        />
        <div>
          <h1 className="text-[55px] font-bold">Supercharge Your <br /> Digital Workflow</h1>
          <p className="py-6 text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
            Explore Products

          </p>
          <div className='flex gap-4'>
            <button className="btn btn-primary  rounded-3xl">Explore Products</button>
            <button className="btn btn-outline btn-primary  rounded-3xl"><CiPlay1 />
              Watch Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;