import React from 'react';
import { FiInstagram } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
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



  );
};

export default Footer;