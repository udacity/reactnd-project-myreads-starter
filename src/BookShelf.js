import React, { Component } from 'react';
import Section from "./Section";
import * as BooksAPI from './BooksAPI';

class BookShelf extends Component {
  state = {
    sections: [
      {
        name: 'Want To Read',
        key: 'wantToRead',
        books: []
      },

      {
        name: 'Read',
        key: 'read',
        books: []
      },
      {
        name: 'Currently Reading',
        key: 'currentlyReading',
        books: []
      }
    ]
  };

  updateBookShelfState = (newState) => {
    this.setState({
      sections: newState
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
    this.props.history.push('/search')
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(resp => {
        return this.buildSection(resp)
      })
      .then(result => {
          console.log("Result:", result)
          return this.updateBookShelfState(result)
        }
      )
  }

  updateSelection = (newSection, book) => {
    BooksAPI.update(book, newSection)
      .then(response => {
          this.updateBookShelfState(response)
        }
      );

    this.props.history.push('/')
  };

  handleSectionChange = (newSection, oldSection, book) => {
    this.updateSelection(newSection, book)
  };


  render() {
    const { sections } = this.state;
    console.log("Rendering....");

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
          <button onClick={this.handleAddBook}>Add a book</button>
        </div>
      </div>
    )
  }
}


export default BookShelf;
