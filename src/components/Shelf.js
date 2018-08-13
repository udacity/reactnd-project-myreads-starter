import React from "react";
import '../App.css';
import {ShelfBook} from './ShelfBook';

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