import React, { Component } from "react";

class BookStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "none" };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    this.setState({ value: event.target.value });
    debugger
    this.props.changeBookStatus(event.target.value, this.props.bookId);
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleSelect}>
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

export default BookStatus;
