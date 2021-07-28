import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "./BooksAPI";
import BookShelf from "./BookShelf";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [shelves, setShelves] = useState([]);

  const sortBooksByShelf = async () => {
    const data = await getAll();
    setBooks(data);
    const booksByShelf = {};
    data.forEach((book) => {
      if (booksByShelf[book.shelf]) {
        booksByShelf[book.shelf].push(book);
      } else {
        booksByShelf[book.shelf] = [book];
      }
    });

    setShelves(Object.keys(booksByShelf));
  };

  useEffect(() => {
    sortBooksByShelf();
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <BookShelf
              shelf={shelf}
              books={books}
              key={shelf}
              className="bookshelf"
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/searchbooks">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
