import React from 'react'
import '../App.css'

   export default class WantTo extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
              value: 'wantToRead',
              currentBook: null
            };
          
      
          this.handleChange = this.handleChange.bind(this);
        }

        componentDidMount() {
          this.setState({
            currentBook: this.props.myBook
          })
        }

    handleChange(event) {
        this.setState({
            value: event.target.value
            },
            () => {
                this.props.updateShelf(this.state.currentBook, this.state.value)
                
            });
      }

      render() {

    const { myBook } = this.props
    const ifMultipleAuthors = myBook.authors.length === 1 ? myBook.authors : myBook.authors.map((writers, index) => { return <div key={index}>{writers}</div> })
    return (
      <div>
          {
        <li>
            <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+myBook.imageLinks.smallThumbnail+')' }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
            </div>
                <div className="book-title">{myBook.title}</div>
                <div className="book-authors">{ifMultipleAuthors}</div>
            </div>
        </li>
    }
    </div>
        )
    }
  }