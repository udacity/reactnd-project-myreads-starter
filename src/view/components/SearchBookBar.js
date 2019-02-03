import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchBookBar extends Component {
  render() {
    return (
      <div className="search-books-bar">
        <Link
          to={this.props.link}
        >
          <button className="close-search">
            Close
          </button>
        </Link>

        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" />
        </div>
      </div>
    );
  }
}