import React from "react";
import { Link } from "react-router-dom";
import { Shelf } from "../Shelf";
import "./Library.css";

const Library = () => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <Shelf />
      <Shelf />
      <Shelf />
    </div>
    <div className="open-search">
      <Link to="/search">
        <button>Add a book</button>
      </Link>
    </div>
  </div>
);

export default Library;
