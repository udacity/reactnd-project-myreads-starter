import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import List from "./components/List";
import Modal from "./components/Modal";
import Search from "./components/Search";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
    status: "loading",
    showModal: false,
    selectedBook: null,
    selectedShelf: null,
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    this.setState({
      status: "loading",
    });
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books: books,
        status: "loaded",
      }))
    })
    .catch(error => {
      console.error('Error fetching API:', error);
      this.setState({books: null, status: 'error'})
  })
  }

  onShelfChange = (book, shelf) => {
    this.setState({ status: "loading", selectedBook: book, selectedShelf: shelf });
    BooksAPI.update(book, shelf).then((data) => {
      this.getBooks();
      this.showModal();
    });
  };

  showModal = () => {
    this.setState(() => ({
      showModal: !this.state.showModal
    }))
  }

  render() {
    return (
      <div className="app">
        <Modal show={this.state.showModal} onClose={this.showModal} book={this.state.selectedBook} shelf={this.state.selectedShelf}>
        </Modal>
        <Route
          exact
          path="/"
          render={() => (
            <List
              onShelfChange={this.onShelfChange}
              books={this.state.books}
              status={this.state.status}
            />
          )}
        />

        <Route
          path="/search"
          render={() => (
            <Search
              books={this.state.books}
              onShelfChange={this.onShelfChange}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
