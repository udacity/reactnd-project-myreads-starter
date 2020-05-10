import React from 'react'
import '../App.css'
import * as BooksAPI from '../BooksAPI'

export default class SearchBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'none',
            currentBook: null
        };
        
    
        this.handleChange = this.handleChange.bind(this);
    }

componentDidMount() {
    this.setState({
    currentBook: this.props.searchList,
    value: this.props.searchList.shelf    
    })
}

changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(console.log('it worked'))
    }

handleChange(event) {
    this.setState({
        value: event.target.value
        },
        () => {
            this.changeShelf(this.state.currentBook, this.state.value)
        });
    }

    render() {
    const {searchList } = this.props
    const noThumb = searchList.imageLinks !== undefined ? searchList.imageLinks.smallThumbnail : 'https://getuikit.com/v2/docs/images/placeholder_600x400.svg'
    const ifMultipleAuthors = searchList.authors !== undefined ? searchList.authors.length === 1 ? searchList.authors : searchList.authors.map((writers, index) => { return <div key={index}>{writers}</div> }) : null

    return (
      <div>
          {
        <li>
        <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${noThumb})` }}></div>
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
            <div className="book-title">{searchList.title}</div>
            <div className="book-authors">{ifMultipleAuthors}</div>
        </div>
    </li>
    }
    </div>
        )
    }
  }