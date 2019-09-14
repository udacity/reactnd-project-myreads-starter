import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from "./Section";

class BookShelf extends Component {
  state = {
    sections: ['Currently Reading', 'Want To Read', 'Read']
  };

  render() {
    console.log(this.state.sections);
    return (
      <div>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {
            this.state.sections.map((section, index) => (
              <Section section={section} key={index}/>
            ))
          }
        </div>
      </div>
    )
  }
}


export default BookShelf;
