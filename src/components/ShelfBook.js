import React from "react";
import '../App.css';
import {BookGrid} from './BookGrid';
import PropTypes from 'prop-types';

export class ShelfBook extends React.Component {
  render() {
    return (
      <div className="bookshelf-books">
        <BookGrid 
          books={this.props.books}
          onShelfChange={this.props.onShelfChange} />
      </div>
    )
  }
}

ShelfBook.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}