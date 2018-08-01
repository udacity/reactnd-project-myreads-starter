import React, { Component } from "react";

class BookStatus extends Component {
  state = { 
    value: "" 
  };

  handleSelect(event) {
    this.props.changeBookStatus(event.target.value, this.props.book);
  }

  render() {
    const { book } = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={book.shelf || 'no-value'} onChange={this.handleSelect.bind(this)}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="no-value">None</option>
        </select>
      </div>
    );
  }
}

export default BookStatus;
