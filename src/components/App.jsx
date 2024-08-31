/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from './Header';
import BookList from './BookList';
import AddBook from './AddBook';
import Header_two from './Header_two';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <Header_two title="Book Management System" />
      <div className="container mx-auto p-4">
        <AddBook addBook={addBook} />
        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;
