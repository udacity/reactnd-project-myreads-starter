import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Shelf from "../../components/Shelf";
import { Creators } from "../../store/ducks/shelfs";

class BookList extends Component {
  componentDidMount = () => {
    this.props.getShelfs();
  };
  render = () => (
    <div className="list-books">
      <div className="list-books-content">
        {this.props.shelfs.map(({ name, books }) => (
          <Shelf name={name} books={books} />
        ))}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
BookList.propTypes = {
  shelfs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      books: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          authors: PropTypes.arrayOf(PropTypes.string).isRequired,
          thumbnail: PropTypes.string.isRequired,
          shelf: PropTypes.string
        })
      ).isRequired
    })
  ),
  getShelfs: PropTypes.func.isRequired
};

const mapStateToProps = ({ shelfs }) => ({ shelfs });
const mapDispatchToProps = dispatch => ({
  getShelfs: () => dispatch(Creators.getShelfs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
