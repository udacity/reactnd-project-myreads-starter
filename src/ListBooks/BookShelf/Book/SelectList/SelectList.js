import React, { Component } from "react";
import propTypes from "prop-types";
import "../../../../App.css";

class SelectList extends Component {
  static propTypes = {
    book: propTypes.object.isRequired,
    shelf: propTypes.string,
    onMoveBook: propTypes.func.isRequired,
  };
  // state = {
  //   value: this.props.shelf,
  // };

  change = (event) => {
    // this.setState(() => ({
    //   value: event.target.value,
    // }));
    // console.log("it is changed to ", this.state.value);
    this.props.onMoveBook(this.props.book, event.target.value);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.shelf === undefined ? "none" : this.props.shelf}
          onChange={this.change}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default SelectList;
