import React from "react";
import { Switch, Route } from "react-router-dom";
// // import * as BooksAPI from './BooksAPI'
import ListBooks from "./ListBooks";
import SearchBook from "./SearchBook";
import "./App.css";

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path='/' component={ListBooks} />
      <Route path='/search' component={SearchBook} />
    </Switch>
  </div>
);

export default App