import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BookChanger extends Component {

  static propTypes = {
    status: PropTypes.string.isRequired,
    bookId: PropTypes.string.isRequired
  }

  onChangeHandler = (bookId, status) => {
    debugger
    console.log(status)
  }

  render() {
    const { status, bookId } = this.props;

    return (
      <div className="book-shelf-changer">
        <select value={status} onChange={(event) => this.onChangeHandler(bookId, event.target.value, )}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading" >Currently Reading</option>
          <option value="wantToRead" >Want to Read</option>
          <option value="read" >Read</option>
          <option value="none" >None</option>
        </select>
      </div>
    )
  }
}
