import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import Books from '../books';


class SearchPage extends React.Component{
    
 constructor(props){
    super(props);
    this.state = {
      books: [],
      results:[],
      query:""
   }

  }
  
   


  componentDidMount() { //Utilized concepts from Udacity Classroom
    BooksAPI.getAll().then((response)=>{
        this.setState({books: response});
        
        console.log(response);
    });
    
  }
  
  updateQuery = (query) => { //Utilized concepts from Udacity Classroom

    this.setState({query:query}, this.submitSearch);

  }

  updateBook = (book, shelf) => //Utilized Method from Ryan Waite's Walkthrouh
    BooksAPI.update(book, shelf).then(resp => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });


    submitSearch() { //Utilzed Method from Ryan Waite's Walkthrough
      if(this.state.query === '' || this.state.query === undefined) {
         return this.setState({ results: [] })
      }
      BooksAPI.search(this.state.query.trim()).then(response => {
         if(response.error) {
            return this.setState({results: [] })
         }
         else {
            response.forEach(b => {
               let f = this.state.books.filter(B => B.id === b.id)
               if(f[0]) { b.shelf = f[0].shelf }               
            });
            return this.setState({results: response })
         }
      })
   }




    render() {//Utilized Concepts from Udacity Classroom

        return (
        <div>             
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link> 
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" 
                  value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                  />
  
                </div>
              </div>
            <div className="search-books-results">
              <ol className="books-grid">
                
          
              {this.state.results.map((book, key) => <Books updateBook={this.updateBook} book={book} key={key} />)}
            
            </ol>
            </div>
            </div>
        </div>
        );
       
    }


}

/* NOTES: The search from BooksAPI is limited to a particular set of search terms.
   You can find these search terms here:
    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
    you don't find a specific author or title. Every search is limited by search terms.
  */


 /* ****Import Notes Pertaining to Code Structure*****
        -Make sure that the <Link></Link> imported from router is Capitalized
        -Case matters when imporing Links from React Router
 */       

export default SearchPage

/*References use: Ryan Waite's FEND Project 6 Walk Through at: https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be
https://reacttraining.com/react-router/web/api/Link 
Udacity Classroom: Bulding With React*/