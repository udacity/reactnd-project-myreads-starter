import React from "react";
import '../App.css';
import {BookShelfBooksComponent} from './BookShelfBooksComponent';

export class BookShelfComponent extends React.Component {
  
  render() {
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <BookShelfBooksComponent 
          books={this.props.books} 
          onShelfChange={this.props.onShelfChange} />
    </div>
    )
  }
}