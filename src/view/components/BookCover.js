import React, { Component } from 'react';

export default class BookCover extends Component {
  render() {
    return (
      <div className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${this.props.cover})`
        }}
      />
    )
  }
}