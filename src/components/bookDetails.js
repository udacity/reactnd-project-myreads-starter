import React, { Component } from 'react';
import { get as getBook} from '../BooksAPI';
import 'bootstrap/dist/css/bootstrap.min.css';

class BookDetails extends Component {
  
  state={
      book:{    
        title: '',
        authors: [],
        publisher: '',
        description: '',
        shelf: '',
        image: '',
        categories: [],
        pageCount: '',
        language: ''
    },
    }
  
  componentDidMount = () => {
    const { match } = { ...this.props };
    const id = match.params.id;
    getBook(id).then((res) => {
        const categories = res.categories ? [...res.categories] : [];   
        const book = {
            id: res.id,
            title: res.title,
            authors: [...res.authors],
            publisher: res.publisher,
            description: res.description,
            shelf: res.shelf,
            image: res.imageLinks.thumbnail,
            categories: [...categories],
            pageCount: res.pageCount,
            language: res.language
        }
        this.setState({ book });
    });
  };

  render() {
      const book = {...this.state.book};
    return <div className='container'>
      <div className="row d-flex justify-content-center m-3 p-3 bg-light" >
            <div className="row col-md-6">
              <h5 className="card-title bd-title" style={{fontSize:"calc(1.425rem + 2.1vw)", fontWeight:"bold"}}>{book.title}</h5>
              <div className="card-text row">
                <div className="">
                  <p>description: {book.description.slice(0, 250)} </p>
                  <div className='d-flex justify-content-between pt-4'>
                    <span>
                      <p >
                        publisher {book.publisher}
                      </p>
                    </span>
                    <span>
                      <p >
                        page Count: {book.pageCount}
                      </p>
                    </span>
                  </div>
                  <div className='d-flex justify-content-between pr-1'>
                    <p >
                      authors: {book.authors}
                    </p>
                    <p >
                      categories: {book.categories}
                    </p>
                  </div>
                  <p style={{ display: "inline" }}>
                    language: {book.language}
                  </p>
                </div>
              </div>
              <div className="col-1" />
            </div>
            <div className='row col-5 d-flex justify-content-end align-items-end mb-5 pb-4'>
                <div className="d-absolute " style={{ }}>
                  <div className='d-flex align-items-center'>
                    <img className="img-thumbnail" src={book.image} alt="Card cap" />
                    <div className="book-shelf-changer d-absolute">
                      <select onChange={(ev) => this.props.onUpdateBookShelf(ev.target.value, book)} value={book.shelf}>
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  </div>
            </div>
        </div>
    </div>
  }
}

export default BookDetails;