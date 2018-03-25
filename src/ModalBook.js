import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Modal, Button, Header, Image } from "semantic-ui-react";

class SingleBook extends Component {
  static propTypes = {
		book: PropTypes.object.isRequired,
		modalOpen: PropTypes.bool.isRequired
  };

  render() {
    const { book } = this.props;
    console.log(book);

    return (
      <Modal open={this.props.modalOpen} onClose={this.props.handleClose} >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src={
              book.imageLinks
                ? book.imageLinks.thumbnail
                : "http://via.placeholder.com/128x188?text=no+image"
            }
          />
          <Modal.Description>
            <Header>{book.title}</Header>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default SingleBook;
