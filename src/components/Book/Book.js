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
import { connect } from "react-redux";
// ────────────────────────────────────────────────────────────────────────────────
//
// ─── CUSTOM ─────────────────────────────────────────────────────────────────────
//
import { Types } from "../../store/ducks/shelfs";
// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────
//
// ──────────────────────────────────────────────────────────────────── II ──────────
//   :::::: B O O K   C O M P O N E N T : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────
//
export const Book = ({
  title,
  authors,
  thumbnail,
  shelf = "none",
  id,
  changeShelf
}) => (
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
        <select
          value={shelf}
          onChange={event => changeShelf({ id }, event.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option
            value="currentlyReading"
            id={`currentlyReadingShelf`}
            disabled={shelf === "currentlyReading" ? true : null}
          >
            Currently Reading
          </option>
          <option
            id={`wantToReadShelf`}
            value="wantToRead"
            disabled={shelf === "wantToRead" ? true : null}
          >
            Want to Read
          </option>
          <option
            id={`readShelf`}
            value="read"
            disabled={shelf === "read" ? true : null}
          >
            Read
          </option>
          <option
            id={`noneShelf`}
            value="none"
            disabled={shelf === "none" ? true : null}
          >
            None
          </option>
        </select>
      </div>
    </div>
    <div className="book-title">{title}</div>
    {authors &&
      authors.map((author, key) => (
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
  authors: PropTypes.arrayOf(PropTypes.string),
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  shelf: PropTypes.string,
  changeShelf: PropTypes.func.isRequired
};
// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────────────────────── I ──────────
//   :::::: R E D U X   M A P P I N G : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
//

const mapDispatchToProps = dispatch => ({
  changeShelf: (book, shelf) =>
    dispatch({ type: Types.CHANGE_SHELF, payload: { book, shelf } })
});
// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────────── V ──────────
//   :::::: E X P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
export default connect(
  null,
  mapDispatchToProps
)(Book);
// ────────────────────────────────────────────────────────────────────────────────
