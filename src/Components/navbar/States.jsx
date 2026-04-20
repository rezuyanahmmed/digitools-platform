import React from 'react';

const States = () => {
  return (
    <div className="bg-[#7B1DFF] text-white py-8 px-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 text-center">

      <div>
        <h2 className="text-5xl font-bold">50K+</h2>
        <p className="text-sm opacity-90 mt-2">Active Users</p>
      </div>

      <div className="hidden md:block w-[1px] h-16 bg-white/30"></div>

      <div>
        <h2 className="text-5xl font-bold">200+</h2>
        <p className="text-sm opacity-90 mt-2">Premium Tools</p>
      </div>

      <div className="hidden md:block w-[1px] h-16 bg-white/30"></div>

      <div>
        <h2 className="text-5xl font-bold">4.9</h2>
        <p className="text-sm opacity-90 mt-2">Rating</p>
      </div>
    </div>
  
     

  );
};

export default States;