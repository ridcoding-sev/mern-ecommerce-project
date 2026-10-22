import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <img src={assets.Logo} className="w-32 mb-4" alt="logo" />
          <p className="text-sm text-gray-300 leading-relaxed">
            We deliver premium fashion products for men, women and kids.
            Style your life with confidence and comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            <Link className="hover:text-white transition" to="/">Home</Link>
            <Link className="hover:text-white transition" to="/collection">Collection</Link>
            <Link className="hover:text-white transition" to="/about">About</Link>
            <Link className="hover:text-white transition" to="/contact">Contact</Link>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Support</h2>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            <p className="hover:text-white cursor-pointer transition">FAQ</p>
            <p className="hover:text-white cursor-pointer transition">Shipping</p>
            <p className="hover:text-white cursor-pointer transition">Returns</p>
            <p className="hover:text-white cursor-pointer transition">Privacy Policy</p>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Contact</h2>
          <p className="text-sm text-gray-300">Email: support@store.com</p>
          <p className="text-sm text-gray-300">Phone: +880 1234 567890</p>
          <p className="text-sm text-gray-300">Dhaka, Bangladesh</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Your Store. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;