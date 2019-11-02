import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookListItem from "./BookListItem";

class BookList extends Component {
  handleOnPropagateSectionChange = (updatedSection, book) => {
    const currentSection = this.props.section || 'None';
    this.props.onSectionChange(updatedSection, currentSection, book);
  };

  render() {
    const { books, section } = this.props;

    return (
      <div className="bookshelf">
        {
          section !== '' && <h2 className="bookshelf-title">{section}</h2>
        }
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map((book) => (
                  <BookListItem
                    book={book}
                    key={book.id}
                    section={section}
                    onPropagateSectionChange={this.handleOnPropagateSectionChange}
                  />
                )
              )
            }
          </ol>
        </div>
      </div>
    )
  }
}

BookList.propTypes = {
  books: PropTypes.array,
  section: PropTypes.string,
  onSectionChange: PropTypes.func
};

export default BookList;