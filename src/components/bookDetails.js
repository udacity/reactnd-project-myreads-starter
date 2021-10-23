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
      console.log(this.props);
    return (
    <div className='container' style={{ boxSizing:"border-box", height:"100vh" , padding:"10px 40px"}} >
        <div className="card  justify-content-center align-items-center" 
            style={{display:'', alignContent:"center", margin:"5px", padding: "40px 60px" , boxSizing:"border-box", height:"80%", width:"60%"}}>
          <img className="card-img-top " src={book.image} alt="Card cap" style={{ boxSizing:"border-box", height:"50%", width:"40%"}}/>

          <div className="card-body" style={{ boxSizing:"border-box"}}>
            <h5 className="card-title">{book.title}</h5>
            <div className="card-text">
                <div>
                     <p>description: {book.description.slice(0,70)} </p>
                    <div>
                        <span> <p style={{display:"inline"}}>publisher {book.publisher} </p> </span> 
                        <span><p style={{display:"inline", paddingLeft:"30px"}}>page Count: {book.pageCount} </p></span>
                    </div>
                    <div >
                        <p style={{display:"inline"}} >authors: {book.authors} </p>
                        <p style={{display:"inline", marginLeft:"35px",paddingLeft: "90px" }}> categories: {book.categories} </p>
                    </div>
                    <p style={{display:"inline"}}>language: {book.language} </p>
                </div>
            </div>
            <div className="book-shelf-changer">
                {console.log(book.shelf)}
              <select onChange={(ev)=> this.props.onUpdateBookShelf(ev.target.value, book)}  defaultValue={`${book.shelf}`}>
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
      </div>);
  }
}

export default BookDetails;