import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf';
import Search from './Search'
import { Route, Link } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    apiBooks: []
  }

  async componentDidMount() {
    let apiBooks = await BooksAPI.getAll();
    console.log(apiBooks)

    this.setState({
      apiBooks
    });
  }

  render() {

    let sampleBookList = [
      {
        imageLinks: {
          smallThumbnail: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
          thumbnail:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        },
        title: "To Kill A Mockingbird",
        authors: ["Harper Lee"]
      },
      {
        imageLinks: {
          smallThumbnail: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
          thumbnail:"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
        },
        title: "Harry Potter and the Sorcerer's Stone",
        authors: ["J.K. Rowling"]
      }
    ];

    return (
      <div className="app">
        <Route exact path="/search" component={Search} />

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            {/* Bookshelves live inside this div above */}
              <Bookshelf 
                bookshelfTitle={"Sample Bookshelf"}
                books={sampleBookList}
              />

              <Bookshelf 
                bookshelfTitle={"Books from the API"}
                books={this.state.apiBooks}
              />

              {/* Bookshelves should be:
                Read, Currently Reading, Want to Read
              */}

            </div>
          </div>

          {/* Search Button (navigates you) */}
          <div className="open-search">
            <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            <Link className="open-search" to="/search" component={<Search />}>Add a book</Link>
          </div>
        </div>

        
      </div>

    )
  }
}

export default BooksApp
