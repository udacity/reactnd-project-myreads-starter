//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
//
// ─── VENDOR ─────────────────────────────────────────────────────────────────────
//
import React from "react";
import PropTypes from "prop-types";
// ────────────────────────────────────────────────────────────────────────────────
//
// ─── CUSTOM ─────────────────────────────────────────────────────────────────────
//
import Book from "../Book";
// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: S H E L F   C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────
//
const Shelf = ({ name, books = [] }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{name}</h2>
    <div className="bookshelf-books">
      {books.length > 0 ? (
        <ol className="books-grid">
          {books.map(({ title, authors, thumbnail, shelf, id }) => (
            <li key={id}>
              <Book
                title={title}
                authors={authors}
                thumbnail={thumbnail}
                shelf={shelf}
                id={id}
              />
            </li>
          ))}
        </ol>
      ) : (
        <div className="books-error">{`No books on the ${name} shelf.`}</div>
      )}
    </div>
  </div>
);
// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────────────── III ──────────
//   :::::: P R O P T Y P E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
Shelf.prototypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string).isRequired,
      thumbnail: PropTypes.string.isRequired,
      shelf: PropTypes.string
    })
  ).isRequired
};
// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────────── IV ──────────
//   :::::: E X P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
export default Shelf;
// ────────────────────────────────────────────────────────────────────────────────
