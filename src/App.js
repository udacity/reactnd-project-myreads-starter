import React from 'react';
// import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  state = {
    books: [
      {
          "title": "The Linux Command Line",
          "authors": "William E. Shotts, Jr.",
          "cover": {
              "width": 128,
              "height": 192,
              "backgroundImage": "url(\"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api\")"
          },
          "id": "nggnmAEACAAJ"
      },
      {
          "title": "Learning Web Development with React and Bootstrap",
          "authors": "Harmeet Singh, Mehul Bhatt",
          "cover": {
              "width": 128,
              "height": 192,
              "backgroundImage": "url(\"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api\")"
          },
          "id": "sJf1vQAACAAJ"
      },
      {
          "title": "The Cuckoo's Calling",
          "authors": "Robert Galbraith",
          "cover": {
              "width": 128,
              "height": 192,
              "backgroundImage": "url(\"http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
          },
          "id": "evuwdDLfAyYC"
      },
      {
          "title": "Lords of Finance",
          "authors": "Liaquat Ahamed",
          "cover": {
              "width": 128,
              "height": 192,
              "backgroundImage": "url(\"http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
          },
          "id": "74XNzF_al3MC"
      },
      {
          "title": "Needful Things",
          "authors": "Stephen King",
          "cover": {
              "width": 128,
              "height": 192,
              "backgroundImage": "url(\"http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
          },
          "id": "jAUODAAAQBAJ"
      },
      {
          "title": "React",
          "authors": "Nils Hartmann, Oliver Zeigermann",
          "cover": {
              "width": 128,
              "height": 192,
              "backgroundImage": "url(\"http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api\")"
          },
          "id": "IOejDAAAQBAJ"
      },
      {
          "title": "Satire TV",
          "authors": "Jonathan Gray, Jeffrey P. Jones, Ethan Thompson",
          "cover": {
              "width": 128,
              "height": 192,
              "backgroundImage": "url(\"http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api\")"
          },
          "id": "1wy49i-gQjIC"
      }
    ],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  navigateToListBooks = () => this.setState({ showSearchPage: false })

  navigateToSearch = () => this.setState({ showSearchPage: true })
  
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage toListBooks={this.navigateToListBooks} />
        ) : (
          <ListBooks books={this.state.books} toSearch={this.navigateToSearch} />
        )}
      </div>
    )
  }
}

export default BooksApp
