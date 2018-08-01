import React, { Component } from "react";

class BookStatus extends Component {
  constructor(props) {
    super(props);
  }

  state = { 
    value: "" 
  };

  handleSelect(event) {
    this.setState({ value: event.target.value });

    this.props.changeBookStatus(event.target.value, this.props.book);
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleSelect.bind(this)}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="no-value">None</option>
        </select>
      </div>
    );
  }
}

export default BookStatus;
