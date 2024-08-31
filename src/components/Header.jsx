/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function Header({ title }) {
  return (
    <header className="bg-green-700 text-white text-center py-4">
      <h1 className="text-3xl font-bold">{title}</h1>
    </header>
  );
}

export default Header;
