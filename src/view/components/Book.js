import React, { Component } from 'react';
import SelectButton from './SelectButton';

export default class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.cover})`
            }}
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