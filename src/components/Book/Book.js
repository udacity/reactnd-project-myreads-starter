//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
import React from "react";
import PropTypes from "prop-types";
// ────────────────────────────────────────────────────────────────────────────────
//
// ──────────────────────────────────────────────────────────────────── II ──────────
//   :::::: B O O K   C O M P O N E N T : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────
//
const Book = ({ title, authors, thumbnail, shelf, id }) => (
  <div className="book" id={id}>
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url("${thumbnail}")`
        }}
      />
      <div className="book-shelf-changer">
        <select value={shelf} onChange={event => {}}>
          <option value="move" disabled>
            Move to...
          </option>
          <option
            value="currentlyReading"
            disabled={shelf === "wantToRead" ? true : null}
          >
            Currently Reading
          </option>
          <option
            value="wantToRead"
            disabled={shelf === "wantToRead" ? true : null}
          >
            Want to Read
          </option>
          <option value="read" disabled={shelf === "read" ? true : null}>
            Read
          </option>
          <option value="none" disabled={shelf === "none" ? true : null}>
            None
          </option>
        </select>
      </div>
    </div>
    <div className="book-title">{title}</div>
    {authors.map((author, key) => (
      <div className="book-authors" key={key}>
        {author}
      </div>
    ))}
  </div>
);
// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────────────── III ──────────
//   :::::: P R O P T Y P E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired
};
// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────────── IV ──────────
//   :::::: E X P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
export default Book;
// ────────────────────────────────────────────────────────────────────────────────
