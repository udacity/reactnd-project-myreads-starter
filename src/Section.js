import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookList from "./BookList";

class Section extends Component {
  state = {
    books: []
  };

  render() {
    console.log(this.props.section);

    return (
      <div>
        <BookList books={this.state.books} section={this.props.section}/>
      </div>
    )
  }
}


Section.propTypes = {
  section: PropTypes.string.isRequired
};

export default Section;