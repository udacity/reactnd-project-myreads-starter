import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBooks from "./searchBooksRender";
import * as BooksAPI from "../BooksAPI";

/**
 * componet form handle search books and childs is searchBooksRender which render the search result books
 */
class Search extends Component {
    /**
     * 
     * @param {*} props hold bookd of parent and merge it with search books to define its shelfes
     */
  constructor(props) {
    super(props);
    this.state.books = props.books;
  }
  //books for holding search result books 
  state = { query: "", books: [] };


  /**
   * handle chaning in search text
   * @param {*} ev is event parameter that hold event firing info
   */
  getSearchText = (ev) => {
    const searchTxt = ev.target.value.trim();
    if (searchTxt !== "") {
      //fetch API for getting matched book
      BooksAPI.search(searchTxt)
        .then((res) => {
          if (res.length > 0) {
            let [books, shelfs] = [[], []];
            res.forEach((cur) => {
              if (!shelfs.includes(cur.shelf)) shelfs.push(cur.shelf);

              const categories = cur.categories ? [...cur.categories] : [];
              const authors = cur.authors ? [...cur.authors] : [];
              const img = cur.imageLinks ? cur.imageLinks.smallThumbnail : "alt";

              const book = {
                id: cur.id,
                title: cur.title,
                shelf: cur.shelf,
                bookImage: img,
                categories: [...categories],
                authors: [...authors],
              };
              const index = this.state.books.indexOf(book);
              index === -1 && books.push(book);
            });
            this.setState({ books });
          } 
          else
          {
            this.setState({ books: [] });
            alert("No Books matched the search");
          }
        })
        .catch((er) => {
          console.log(er);
          //  alert("invalid searche");
        });
    }
    this.setState({ query: searchTxt });
  };

  /**
   * calling parent event handler for shelf chaning
   * @param {*} bookState : current shelf name
   * @param {*} book : book object
   */
  onUpdateBookShelf = (bookState, book) => {
    this.props.onUpdateBookShelf(bookState, book);
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search"> Close </button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={this.getSearchText}
              placeholder="Search by title or author"
            />
          </div>
        </div>

        {this.state.query !== "" && (
          <div className="search-books-results">
            <ol className="books-grid" />
            <SearchBooks
              books={this.state.books}
              shelfs={this.props.shelfs}
              onUpdateBookShelf={this.onUpdateBookShelf}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
