import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Selector from "./Selector";
import * as BooksAPI from './BooksAPI';


class BookListItem extends Component {
  state = {
    book: {},
  }

  propagateSectionChange = (updatedSection) => {
    console.log("Inside BookListItem", updatedSection, this.props.book)
    this.props.onPropagateSectionChange(updatedSection, this.props.book)
  };

  loadCoverImage = () => {
    const { book } = this.state;
    if (book.imageLinks === undefined) {
      return ''
    }

    if (book.imageLinks.thumbnail === undefined) {
      return book.imageLinks
    } else {
      return book.imageLinks.thumbnail
    }
  };

  fetchCurrentBook = () => {
    const bookId = this.props.bookId;
    BooksAPI.get(bookId)
      .then(response =>
        this.setState({
          book: response,
        })
      )
  }

  componentDidMount() {
    this.fetchCurrentBook();
  }

  render() {
    let coverImage = this.loadCoverImage();
    const { section, bookId } = this.props;
    const { book } = this.state;

    console.log("Inside BookListItem", section, bookId)
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${coverImage})`
            }}/>
            <div className="book-shelf-changer">
              <Selector
                book={book}
                currentSection={section}
                onSelectorClick={this.propagateSectionChange}
              />
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.author}</div>
        </div>
      </li>
    )
  }
}

BookListItem.propTypes = {
  bookId: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  onPropagateSectionChange: PropTypes.func
};

export default BookListItem;