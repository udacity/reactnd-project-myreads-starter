import React from "react";
import Bookshelf from "./Bookshelf";

const shelves = ["Currently Reading", "Want To Read", "Read"];

const Bookcase = ({ books, history }) => {
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
