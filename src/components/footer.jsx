/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-6 mt-8 ">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h4 className="text-lg font-semibold m-4">Library Management System</h4>
          <p className="text-sm m-4" >© 2024 All rights reserved.</p>
        </div>
        <ul className="flex space-x-4 m-4" >
          <li className="hover:text-gray-200 cursor-pointer">Privacy Policy</li>
          <li className="hover:text-gray-200 cursor-pointer">Terms of Service</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
