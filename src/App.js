import React from "react";
import { Switch, Route } from "react-router-dom";
// // import * as BooksAPI from './BooksAPI'
import ListBooks from "./ListBooks";
import SearchBook from "./SearchBook";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path='/' component={ListBooks} />
    <Route path='/search' component={SearchBook} />
  </Switch>
);

export default App





// import React from "react";
// // import * as BooksAPI from './BooksAPI'
// import ListBooks from "./ListBooks";
// import SearchBook from "./SearchBook";
// import "./App.css";

// class BooksApp extends React.Component {
//   state = {};

//   render() {
//     return (
//       <div className="app">
//         <SearchBook />

//         <ListBooks />
//       </div>
//     );
//   }
// }

// export default BooksApp;
