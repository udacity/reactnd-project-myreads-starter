import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookListItem from "./BookListItem";

class BookList extends Component {

  handleOnPropagateSectionChange = (updatedSection, book) => {
    console.log("Inside BookList", updatedSection, book)
    this.props.onSectionChange(updatedSection, this.props.section, book);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.section}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                this.props.books.map((book, index) => (
                    <BookListItem
                      book={book}
                      key={index}
                      section={this.props.section || ''}
                      onPropagateSectionChange={this.handleOnPropagateSectionChange}
                    />
                  )
                )
              }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  section: PropTypes.string.isRequired,
  onSectionChange: PropTypes.func
};

export default BookList;