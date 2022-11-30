import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BooksOnShelfOptions extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    switchShelfOption: PropTypes.func.isRequired
  };

  handleOnSwitchBookShelfOption = (event) => {
    this.props.switchShelfOption(this.props.book, event.target.value);
  }

  render() {

    let shelfCategory = 'none';

    for (let item of this.props.books) {
      if (item.id === this.props.book.id) {
        shelfCategory = item.shelf;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleOnSwitchBookShelfOption} value={shelfCategory}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BooksOnShelfOptions;
