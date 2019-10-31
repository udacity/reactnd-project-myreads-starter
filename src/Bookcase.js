import React from "react";
// import * as BooksAPI from "./BooksAPI";
import Bookshelf from "./Bookshelf";

const shelves = ["Currently Reading", "Want To Read", "Read"];
const books = [
  {
    title: "To Kill a Mockingbird",
    authors: "Harper Lee",
    image:
      'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1' +
      "&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUo" +
      'QBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
  }
];

const Bookcase = ({ history }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelves.map((shelf, index) => (
          <Bookshelf key={index} name={shelf} books={books} />
        ))}
      </div>
      <div className="open-search">
        <button onClick={() => history.push("/search")}>Add a book</button>
      </div>
    </div>
  );
};

export default Bookcase;
