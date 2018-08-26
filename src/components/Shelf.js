import React from "react";
import '../App.css';
import {ShelfBook} from './ShelfBook';
import PropTypes from 'prop-types';

export class Shelf extends React.Component {
  
  render() {
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <ShelfBook 
          books={this.props.books} 
          onShelfChange={this.props.onShelfChange} />
    </div>
    )
  }
}

Shelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}