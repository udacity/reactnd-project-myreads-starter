import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {SHELVES} from '../utils/Enuns';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

class Shelves extends Component {

    static propTypes = {
        shelves: PropTypes.object.isRequired,
        onChangeBookShelf: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf
                            id='Currently Reading'
                            books={this.props.shelves[SHELVES.CURRENTLYREADING] || []}
                            onChangeBook={this.props.onChangeBookShelf}/>
                        <Bookshelf
                            id='Want to Read'
                            books={this.props.shelves[SHELVES.WANTTOREAD] || []}
                            onChangeBook={this.props.onChangeBookShelf}/>
                        <Bookshelf
                            id='Read'
                            books={this.props.shelves[SHELVES.READ] || []}
                            onChangeBook={this.props.onChangeBookShelf}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        );
    }
}

export default Shelves;