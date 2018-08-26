import React from "react";
import PropTypes from 'prop-types';

export class ShelfChanger extends React.Component {
  onShelfChange = (e) => {
    this.props.onShelfChange(e.target.value)
  }
  
  render() {
    return (
      <div className="book-shelf-changer">
        <select defaultValue={this.props.defaultValue || 'none'} onChange={this.onShelfChange}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

ShelfChanger.propTypes = {
  onShelfChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string
}