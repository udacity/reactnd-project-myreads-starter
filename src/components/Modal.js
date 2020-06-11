import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    book: PropTypes.object,
    shelf: PropTypes.string,
  };

  onClose = () => {
    this.props.onClose();
  };

  getShelfName = (shelf) => {
    if (shelf === "currentlyReading") return "to Currently reading.";
    if (shelf === "wantToRead") return "to Want to Read.";
    if (shelf === "read") return "to Read.";
    return "off the shelves.";
  };

  render() {
    const { book, show, shelf } = this.props;

    if (!show) {
      return null;
    }
    return (
      <div className="modal" id="modal">
        <h2>Success</h2>
        <div className="content">
          '{book.title}' by {book.authors} has been moved {this.getShelfName(shelf)}
        </div>
        <div className="actions">
          <button className="toggle-button" onClick={this.onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
