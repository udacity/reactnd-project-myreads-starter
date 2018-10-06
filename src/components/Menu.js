import React, { Component } from "react";
import PropTypes from "prop-types";

class Menu extends Component {
  constructor(props) {
    super();

    this.timer = null;

    this.state = {
      shelf: props.book.shelf,
      shelfText: "",
      showTooltip: false
    }
  }

  handleChange = (e) => {
    const { book, updateShelf } = this.props;
    const val = e.target.value;
    this.setState({
      shelf: val,
      shelfText: e.target.selectedOptions[0].text,
      showFeedbackTip: true
    }, this.fadeOutFeedbackTip);
    updateShelf(book, val);
  };

  fadeOutFeedbackTip = () => {
    this.timer = setTimeout(() => (this.setState({ showFeedbackTip: false })), 2000);
  }

  componentWillUnmount = () => {
    clearTimeout(this.timer);
  }

  render() {
    const { shelf, shelfText, showFeedbackTip } = this.state;
    const className = "feedback-tip" + (showFeedbackTip ? " show" : " hide");

    return (
      <React.Fragment>
        <div className="book-shelf-changer">
          <select value={shelf} onChange={this.handleChange}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
        <div className={className}>{shelfText}</div>
      </React.Fragment>
    );
  }
}

Menu.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default Menu;
