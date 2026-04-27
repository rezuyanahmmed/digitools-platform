import React from 'react';

const Pricing = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20 mb-5">
        <h1 className="font-bold text-2xl">Simple, Transparent Pricing</h1>
        <p className="text-gray-600">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>
      <div className="flex w-[80%] mx-auto space-x-5">

        {/* 1st */}
        <div className="card w-96 bg-base-100 shadow-sm">
          <div className="card-body">
            <span className="text-xl font-bold">Starter</span>
            <div className="flex justify-between flex-col">
              <p className="text-gray-600">Perfect for getting started</p>
              <p className="text-xl text-gray-600 text-[15px] mt-5">
                <span className="text-2xl text-black font-bold">$0</span>/month</p>
            </div>
            <ul className="mt-2 flex flex-col gap-2 text-xs font-semibold text-gray-500">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Access to 10 free tools</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Basic templates</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Community support</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>1 project per month</span>
              </li>

            </ul>
            <div className="mt-19">
              <button className="btn btn-primary btn-block rounded-full">Get Started Free</button>
            </div>
          </div>
        </div>

        {/* 2nd */}
        <div className="card w-96 bg-base-100 shadow-sm bg-gradient-to-r from-[#642ef7] to-purple-600">
          <div className="card-body">
            <span className="text-xl font-bold">Pro</span>
            <div className="flex justify-between flex-col">
              <p className="text-gray-600">Best for professionals</p>
              <p className="text-xl text-gray-600 text-[15px] mt-5">
                <span className="text-2xl text-black font-bold">$29</span>/month</p>
            </div>
            <ul className="mt-2 flex flex-col gap-2 text-xs font-semibold text-white">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Access to all premium tools</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Unlimited templates</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Priority support</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Unlimited projects</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Cloud sync</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Advanced analytics</span>
              </li>

            </ul>
            <div className="mt-6">
              <button className="btn rounded-full btn-block bg-white text-purple-700">Start Pro Trial</button>
            </div>
          </div>
        </div>

        {/* 3rd */}
        <div className="card w-96 bg-base-100 shadow-sm">
          <div className="card-body">
            <span className="text-xl font-bold">Enterprise</span>
            <div className="flex justify-between flex-col">
              <p className="text-gray-600">For teams and businesses</p>
              <p className="text-xl text-gray-600 text-[15px] mt-5">
                <span className="text-2xl text-black font-bold">$99</span>/month</p>
            </div>
            <ul className="mt-2 flex flex-col gap-2 text-xs font-semibold text-gray-500">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Everything in Pro</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Team collaboration</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Custom integrations</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Dedicated support</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>SLA guarantee</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Custom branding</span>
              </li>

            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block rounded-full">Contact Sales</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;