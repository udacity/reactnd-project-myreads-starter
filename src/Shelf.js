import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import { Container, Header } from "semantic-ui-react";

const Shelf = ({ title, shelf, books, updateShelf }) => {
  const currentBooks = books.filter(book => book.shelf === shelf)

  return (
    <Container style={{ marginTop: '3em' }}>
        <Header as='h3' dividing>
          {title}
        </Header>
        <ol className="books-grid">
          {currentBooks.map((book) => (
            <li key={book.id}>
              <Book book={book} updateShelf={updateShelf} />
            </li>
          ))}
        </ol>
    </Container>
  )
  
  // return (
  //   <div className="bookshelf">
  //     <h2 className="bookshelf-title">{title}</h2>
  //     <div className="bookshelf-books">
  //       <ol className="books-grid">
  //         {currentBooks.map((book) => (
  //           <li key={book.id}>
  //             <Book book={book} updateShelf={updateShelf} />
  //           </li>
  //         ))}
  //       </ol>
  //     </div>
  //   </div>
  // )
}

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default Shelf;