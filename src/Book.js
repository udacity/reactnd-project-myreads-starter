import React, { Component } from "react";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";
import ModalBook from "./ModalBook";

class Book extends Component {
  state = { modalOpen: false };

  static propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
  };

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { updateShelf, book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            onClick={this.handleOpen}
            className="book-cover"
            style={{
              backgroundImage: `url(${
                book.imageLinks
                  ? book.imageLinks.thumbnail
                  : "http://via.placeholder.com/128x188?text=no+available"
              })`
            }}
          />
          <ShelfChanger
            updateShelf={updateShelf}
            currentShelf={book.shelf}
            book={book}
          />
        </div>
        <div className="book-title" onClick={this.handleOpen}>{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(", ") : ""}
        </div>
        <div>
          <ModalBook book={book} modalOpen={this.state.modalOpen} handleOpen={this.handleOpen} handleClose={this.handleClose} />
        </div>
      </div>
    );
  }
}

export default Book;








// import React from "react";
// import PropTypes from "prop-types";
// import ShelfChanger from "./ShelfChanger";
// import ModalBook from "./ModalBook";

// const Book = ({updateShelf, book}) => {
//   return (
//     <div className="book">
//       <div className="book-top">
//         <div
//           className="book-cover"
//           style={{
//             width: 128,
//             height: 188,
//             backgroundImage: `url(${
//               book.imageLinks
//                 ? book.imageLinks.thumbnail
//                 : "http://via.placeholder.com/128x188?text=no+image"
//             })`
//           }}
//         />
//         <ShelfChanger updateShelf={updateShelf} currentShelf={book.shelf} book={book} />
//       </div>
//       <div className="book-title">{book.title}</div>
//       <div className="book-authors">
//         {book.authors ? book.authors.join(", ") : ""}
//       </div>
//       <div>
//         <strong onClick={this.props.handleModal}>Abrir</strong>
//         <ModalBook book={book} />
//       </div>
//     </div>
//   );
// };

// Book.propTypes = {
//   book: PropTypes.object.isRequired,
//   updateShelf: PropTypes.func.isRequired
// };

// export default Book;