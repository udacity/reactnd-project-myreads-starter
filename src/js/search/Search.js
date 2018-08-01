import React, { Component } from "react";
import { Debounce } from 'react-throttle';
import { Link } from "react-router-dom";
import Book from "./../book/Book";
import * as BooksAPI from "./../service/BooksAPI";

class Search extends Component {
  state = {
    searchInput: "",
    books: []
  };

  onChange = event => {
    // At this part I'm creating a transaction which is automatically executed after passing by if condition,
    // to fill the books array I'm checking if there's it's already on my shelf, if the answer is yes, I
    // see no necessity to show it again.
    if (event.target.value !== "") {
      let bookShelf = this.props.bookShelf;
      BooksAPI.search(event.target.value.trim()).then(books => {
        let flag = false;

        //If flags keeps false, the book isn't on my shelf list, so I can input it on my books list
        //(list which will be rendered in this component)
        if (books.length !== undefined) {
          this.setState({ books: [] });

          books.map(bookFromSearch => {
            for (let i = 0; i < bookShelf.length; i++) {
              if (bookFromSearch.id === bookShelf[i].id) {
                flag = true;
              }
            }
            if (flag === false) {
              this.setState(state => {
                return state.books.push(bookFromSearch);
              });
            }

            flag = false;
          });
        } else {
          this.setState({ books: [] });
        }
      });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
          <Debounce time="500" handler="onChange">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.onChange.bind(this)}
            />
          </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <h1>{this.state.searchInput}</h1>
          <ol className="books-grid">
            {this.state.books.length > 0 &&
              this.state.books.map(book => (
                <div>
                  <Book
                    book={book}
                    changeBookStatus={(value, book) =>
                      this.props.changeBookStatus(value, book)
                    }
                  />
                </div>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
