import React, { Component } from 'react';
import Section from "./Section";
import * as BooksAPI from './BooksAPI';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

class BookShelf extends Component {
  state = {
    sections: []
  };

  updateBookShelfState = (newState) => {
    const { sections } = this.state;

    this.setState({
      sections: Object.assign(sections, newState, {})
    })
  };

  buildSection = (response) => {
    let sectionBooks = [];

    let readSection = {
      name: 'Read',
      key: 'read',
      books: []
    };

    let currentlyReading = {
      name: 'Currently Reading',
      key: 'currentlyReading',
      books: []
    };

    let wantToRead = {
      name: 'Want To Read',
      key: 'wantToRead',
      books: []
    };

    currentlyReading['books'] = this.filterBooksForSection(response, 'currentlyReading');
    sectionBooks.push(currentlyReading);

    wantToRead['books'] = this.filterBooksForSection(response, 'wantToRead');
    sectionBooks.push(wantToRead);

    readSection['books'] = this.filterBooksForSection(response, 'read')
    sectionBooks.push(readSection);

    return sectionBooks
  };

  filterBooksForSection = (response, key) => {
    return response.filter((book) =>
      book.shelf === key
    );
  };

  handleAddBook = () => {
    console.log(this.props.history)
    this.props.history.push('/search')
  };

  componentDidMount() {
    console.log(this.props.updateSection);
    this.updateBookShelfState(this.updateSection)

    BooksAPI.getAll()
      .then(resp => {
        return this.buildSection(resp)
      })
      .then(result => {
          return this.updateBookShelfState(result)
        }
      )
  }

  updateSelection = (newSection, book) => {
    BooksAPI.update(book, newSection)
      .then(response => {
          return this.updateBookShelfState(response)
        }
      );
  };

  handleSectionChange = (newSection, oldSection, book) => {
    this.updateSelection(newSection, book)
  };

  updateSearchedBook = () => {
    if(this.props.shelfChange === true) {
      console.log("Updating shelf", this.props.updatedSectionDetails['updatedSection'],
        this.props.updatedSectionDetails['book'])

      this.updateSelection(
        this.props.updatedSectionDetails['updatedSection'],
        this.props.updatedSectionDetails['book']
      )
    }
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {
            sections.map((section, index) => (
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
  updateSection: PropTypes.object
};
export default BookShelf;
