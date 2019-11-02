import React, { Component } from 'react';
import Section from "./Section";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class BookShelf extends Component {
  handleSectionChange = (newSection, oldSection, book) => {
    this.props.onSectionChange(newSection, oldSection, book)
  };

  render() {
    const { bookshelf } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          {
            bookshelf.map((section, index) => (
              <Section
                section={section}
                key={index}
                onSectionChange={this.handleSectionChange}
              />
            ))
          }
        </div>

        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  sections: PropTypes.object
};

export default BookShelf;
