/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function Book({ book }) {
  return (
    <li className="bg-white p-4 rounded-lg shadow-md my-2">
      <h3 className="text-lg font-bold">{book.title}</h3>
      <p className="text-gray-600">by {book.author}</p>
    </li>
  );
}

export default Book;
