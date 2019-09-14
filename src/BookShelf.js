import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from "./Section";

class BookShelf extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  render() {
    return (
      <div>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {
            <Section />
          }
        </div>
      </div>
    )
  }
}


export default BookShelf;
