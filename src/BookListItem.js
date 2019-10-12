import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Selector from "./Selector";


class BookListItem extends Component {

  propagateSectionChange = (updatedSection) => {
    console.log("Inside BookListItem", updatedSection, this.props.book)
    this.props.onPropagateSectionChange(updatedSection, this.props.book)
  };

  loadCoverImage = () => {
    const {book} = this.props;
    if(book.imageLinks === undefined) {
      return ''
    }

    if(book.imageLinks.thumbnail === undefined) {
      return book.imageLinks
    } else {
      return book.imageLinks.thumbnail
    }
  };

  render() {
    let coverImage = this.loadCoverImage();

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
                currentSection={this.props.section}
                onSelectorClick={this.propagateSectionChange}
              />
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.author}</div>
        </div>
      </li>
    )
  }
}

BookListItem.propTypes = {
  book: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired,
  onPropagateSectionChange: PropTypes.func
};

export default BookListItem;