import React from 'react';
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {
  
  constructor(props) {
  	super(props);
    this.state = {
      shelf: props.shelf,
      unmounting: false,
    };
  }
  
  componentDidMount() { 
    this._isMounted = true;
  }

  componentWillUnmount() {
     this._isMounted = false;
  }
  
  handler = async event => {
    const destination = event.target.value;
    await BooksAPI.update(this.props, destination).then(r => console.log(r));
    this.props.changer(this.props, this.state.shelf, destination);
    if (this._isMounted) {
      this.setState({shelf: destination});
    }
  }

  render() {
    return (
      <div className="book">
      <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.image }}></div>
      <div className="book-shelf-changer">
      <select value={this.state.shelf} onChange={this.handler}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
      </select>
      </div>
      </div>
      <div className="book-title">{this.props.title}</div>
      <div className="book-authors">{this.props.authors}</div>
      </div>
    );
  }
}

export default Book;