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
        <BookList books={this.props.section.books} section={this.props.section.name}/>
      </div>
    )
  }
}


Section.propTypes = {
  section: PropTypes.object.isRequired
};

export default Section;


// Algorithm:
// Filter the books depending on which section is being displayed
// What do I need in order to do that? I need a way to track which is the self
//
