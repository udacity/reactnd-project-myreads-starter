import React from "react";
import '../App.css';
import {BookShelfBooksComponent} from './BookShelfBooksComponent';

export class BookShelfComponent extends React.Component {
  render() {
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.shelf.title}</h2>
        <BookShelfBooksComponent books={this.props.shelf.books} />
    </div>
    )
  }
}