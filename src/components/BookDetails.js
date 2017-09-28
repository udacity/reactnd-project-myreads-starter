import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {get} from "../BooksAPI";
import LoadingGauge from './LoadingGauge';

class BookDetails extends Component {

    state = {
        book: {},
        loading: true
    };

    componentWillMount() {
        const id = location.pathname.split("/")[2];
        get(id).then((book) => {
            console.log(book);
            this.setState({book, loading: false});
        })

    }

    render() {
        const {book, loading} = this.state;
        return (
            <div>
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <span>{book.title || 'Loading...'}</span>
                    </div>
                </div>
                {loading ? <LoadingGauge/> :
                    <div className='book-detail'>
                        <div className='book'>
                            <div className='book-top' style={{
                                width: 320,
                                height: 482
                            }}>
                                <div className="book-cover" style={{
                                    width: 320,
                                    height: 482,
                                    backgroundImage: `url(${book.imageLinks.thumbnail})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}/>
                            </div>
                        </div>
                        <div className='book-detail-info'>
                            <p><b>{'Title: '}</b>{book.title}</p>
                            <p><b>{'Authors: '}</b>{book.authors && book.authors.join(', ')}</p>
                            <p><b>{'Publisher: '}</b>{book.publisher}</p>
                            <p><b>{'Categories: '}</b>{book.categories && book.categories.join(', ')}</p>
                            <p><b>{'Page Count: '}</b>{book.pageCount}</p>
                            <p><b>{'Language: '}</b>{book.language}</p>
                            <p><b>{'Maturity Rating: '}</b>{book.maturityRating.split('_').join(" ").toLowerCase()}</p>
                            <p><b>{'Shelf: '}</b>{book.shelf || "none"}</p>
                            <p><b>{'Description: '}</b>{book.description}</p>
                            <p><b>{'Average Rating: '}</b>{book.averageRating || "Not evaluated yet"}</p>
                            <p><a href={book.infoLink} target='_blank'>{'More Info'}</a></p>
                            <p><a href={book.previewLink} target='_blank'>{'Preview'}</a></p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default BookDetails;