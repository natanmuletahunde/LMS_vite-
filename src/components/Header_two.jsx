/* eslint-disable no-unused-vars */
import React from 'react';

const Header_two = () => {
  return (
    <header className="bg-green-700 p-4">
      <nav className="flex justify-between items-center">
        <ul className="flex space-x-4">
          <li className="text-white hover:text-gray-200 cursor-pointer">Home</li>
          <li className="text-white hover:text-gray-200 cursor-pointer">Blog</li>
          <li className="text-white hover:text-gray-200 cursor-pointer">Services</li>
          <li className="text-white hover:text-gray-200 cursor-pointer">Become Partner</li>
          <li className="text-white hover:text-gray-200 cursor-pointer">Modules</li>
          <li className="text-white hover:text-gray-200 cursor-pointer">Contact</li>
        </ul>
        <div>
          <button className="bg-white text-green-700 py-2 px-4 rounded hover:bg-gray-200">
            Download Brochure
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header_two;
