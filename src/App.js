import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.css';
import * as API from './BooksAPI';
import LandingPage from './Components/landingpage';
import Search from './Components/Search/search';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: [],
      query: '',
      queryResult: [],
    };
  }

  /**
   * @description Makes API Call to BooksAPI with query input
   */
  handleQuery = () => {
    const { query } = this.state;
    try {
      API.search(query).then(
        (result) => Array.isArray(result) && this.setState({ queryResult: result }),
      );
    } catch (err) {
      return null;
    }
  };

  /**
   * @description Sets Query String to state.
   * Using setQuery AND handleQuery in order to preserve State after Navigation
   * @param  {} query String
   */
  setQuery = (query) => {
    this.setState({ query });
    this.handleQuery();
  };

  /**
   * @description Adds book to Shelf in state
   * @param  {} id Book ID
   * @param  {} shelf New Shelf of Book
   */
  addBook = (id, shelf) => {
    API.get(id).then((book) => {
      const { [shelf]: currShelf } = this.state;
      currShelf.push(book);
      this.setState({
        [shelf]: currShelf,
      });
    });
  };

  /**
   * @description Updates State: Removes Book from Current Shelf and Adds book to new Shelf
   * @param  {} id Book ID
   * @param  {} currShelf current Shelf
   * @param  {} toShelf new Shelf
   */
  moveBook = (id, currShelf, toShelf) => {
    if (currShelf !== 'none') {
      let { [currShelf]: shelf } = this.state;
      shelf = shelf.filter((book) => book.id !== id);
      this.setState({
        [currShelf]: shelf,
      });
    }
    if (toShelf !== 'none') this.addBook(id, toShelf);
  };

  /**
   * @description Moves Book from old Shelf to new Shelf
   * @param  {} book Book ID
   * @param  {} fromShelf Old Shelf
   * @param  {} toShelf New Shelf
   */
  handleShelfChange = (book, fromShelf, toShelf) => {
    const b = {};
    b.id = book;
    API.update(b, toShelf).then((result) => {
      if (toShelf === 'none' || result[toShelf].includes(book))
        this.moveBook(book, fromShelf, toShelf);
    });
  };

  /**
   * @description Fetches initial Data from Server
   */
  fetchData = () => {
    API.getAll().then((books) => {
      const currentlyReading = [];
      const wantToRead = [];
      const read = [];
      books.forEach((book) => {
        if (book.shelf === 'currentlyReading') currentlyReading.push(book);
        else if (book.shelf === 'wantToRead') wantToRead.push(book);
        else if (book.shelf === 'read') read.push(book); // ? adding the evaluation to prevent errors from API
      });
      this.setState({
        currentlyReading,
        wantToRead,
        read,
      });
    });
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    const { history } = this.props;
    const { currentlyReading, wantToRead, read, query, queryResult } = this.state;
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <Search
              goHome={() => history.push('/')}
              handleShelfChange={this.handleShelfChange}
              query={query}
              setQuery={this.setQuery}
              queryResult={queryResult}
              stateShelves={[...currentlyReading, ...wantToRead, ...read]}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <LandingPage
              currentlyReading={currentlyReading}
              wantToRead={wantToRead}
              read={read}
              history={history}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
      </div>
    );
  }
}

BooksApp.propTypes = { history: PropTypes.any.isRequired };

export default withRouter(BooksApp);
