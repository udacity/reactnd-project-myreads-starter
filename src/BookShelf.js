import React, {Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';

class BookShelf extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  render(){
    return(
      <Section />
    )
  }
}


export default BookShelf;
