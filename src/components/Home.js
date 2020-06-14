import React from "react";
import { Link } from "react-router-dom";
import Book from "../images/book.svg";

const Home = () => (
  <div className="hero-container">
    <div className="hero-image-container">
      <div className="hero-logo">
        <Link to="/">MyReads</Link>
      </div>
      <div className="hero-image">
        <img src={Book} alt="book"/>
      </div>
    </div>
    <div className="hero-text">
      <h1 className="hero-header-text">Welcome to MyReads</h1>
      <p className="hero-sub-header-text">Books never have an ending. </p>
      <button className="hero-button">
        <Link to="/dashboard">Get Started</Link>
      </button>
    </div>
  </div>
);

export default Home;
