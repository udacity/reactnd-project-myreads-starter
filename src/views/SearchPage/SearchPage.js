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
import SearchBar from "../../components/SearchBar";
import BooksGrid from "../../components/BooksGrid";
// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────
//
// ──────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: S E A R C H P A G E   C O M P O N E N T : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────
//
const SearchPage = ({ result = [] }) => (
  <div className="search-books">
    <SearchBar />
    <div className="search-books-results">
      <BooksGrid books={result} errorMessage="No books found for your search" />
    </div>
  </div>
);
// ────────────────────────────────────────────────────────────────────────────────
//
// ────────────────────────────────────────────────────────── III ──────────
//   :::::: P R O P T Y P E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
BooksGrid.prototypes = {
  result: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string).isRequired,
      thumbnail: PropTypes.string.isRequired,
      shelf: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired
};
// ────────────────────────────────────────────────────────────────────────────────
const mapStateToProps = ({ search: { result } }) => ({
  result
});
//
// ────────────────────────────────────────────────────── IV ──────────
//   :::::: E X P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
export default connect(mapStateToProps)(SearchPage);
// ────────────────────────────────────────────────────────────────────────────────
