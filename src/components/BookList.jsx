/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Book from './Book';

function BookList({ books }) {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold">Book List</h2>
      <ul className="mt-2">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
