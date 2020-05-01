import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { Route, Link } from "react-router-dom";
import { Library } from "./Library";
import { SearchPage } from "./SearchPage";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Library} />
        <Route
          path="/search"
          render={() => (
            <div>
              <SearchPage />
              Search page <Link to="/">Back to shelf</Link>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
