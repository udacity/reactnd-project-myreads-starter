import React, { Component } from 'react';
import SelectButton from './SelectButton';
import BookCover from './BookCover';

export default class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <BookCover
            cover={this.props.cover}
          />
          <SelectButton />
        </div>
        <div className="book-title">
          {this.props.title}
        </div>
        <div className="book-authors">
          {this.props.author}
        </div>
      </div>
    );
  }
}