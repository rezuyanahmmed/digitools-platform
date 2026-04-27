import React from 'react';

const Ready = () => {
  return (
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
  );
};

export default Ready;