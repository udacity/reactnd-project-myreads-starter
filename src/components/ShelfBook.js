import React from "react";
import '../App.css';
import {BookGrid} from './BookGrid'

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