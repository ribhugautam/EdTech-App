import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" w-11/12 border-y border-slate-400/50 max-w-[1180px] mx-auto mt-8 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:justify-between lg:justify-between">
          <div className="w-full md:w-auto">
            <h3 className="text-white font-bold mb-4">Tech Buddies</h3>
            <p className="text-gray-300 max-w-[30rem] ">
              We are a community of tech enthusiasts who love to share their knowledge and expertise with others.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="list-none text-gray-300">
              <li className="mb-2">
                <Link to="/about">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-white font-bold mb-4">Social Media</h3>
            <ul className="list-none text-gray-300">
              <li className="mb-2">
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="https://www.twitter.com/">Twitter</a>
              </li>
              <li className="mb-2">
                <a href="https://www.instagram.com/ribhugautam">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="list-none text-gray-300">
              <li className="mb-2">
                Email: <a href="mailto:gautamribhu@gmail.com">hello@techbuddies.com</a>
              </li>
              <li className="mb-2">
                Phone: <a href="tel:+1234567890">+1 (234) 567-8900</a>
              </li>
            </ul>
          </div>
        </div>
        <br/>
        <div className="text-center pt-4 text-gray-400">
          &copy; {new Date().getFullYear()} Tech Buddies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;