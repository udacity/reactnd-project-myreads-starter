import React, { Fragment } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './Components/BooksList'
import SearchPage from './Components/SearchPage'
import {BrowserRouter, Route,Link} from 'react-router-dom'

class BooksApp extends React.Component {

constructor(props)
{
  super(props);

  (localStorage.length)? 
  (this.state=JSON.parse(localStorage.getItem('State'))):
  (
 this.state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: {
     
      wantToRead: [
     {title:'1776',  id:1, author:'David McCullough',style:{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")' } },
     {title:'Harry Potter and the Sorcerer\'s Stone',id:2, author:'J.K. Rowling',style:{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")' } }
    ],
    
    read :[
    
     {title:'The Hobbit' ,id:3, author:'J.R.R. Tolkien',style:{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")' } },
     {title:'Oh, the Places You\'ll Go!',id:4, author:'Seuss',style:{ width: 128, height: 174, backgroundImage: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")' } },
     {title:'The Adventures of Tom Sawyer',id:5, author:'Mark Twain',style:{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' } }
    
    ],
    
    currentlyReading :[
      {title:'To Kill a Mockingbird',id:6, author:'Harper Lee',style:{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' } },
     {title:'Ender\'s Game',id:7, author:'Orson Scott Card',style:{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' } }
    ]
  },
    
        

    showSearchPage: false,
    query:''
  }
  )
}



componentDidMount()
{

  // let storedState = window.localStorage.getItem('State');
  // storedState= JSON.parse(storedState);
  // this.setState ({
  //   books: {...storedState.books},
  //   showSearchPage: storedState.showSearchPage
  // })
  // console.log('stored state')
  // console.log(storedState)
}



  changeHandler = ((book,newList,oldList) =>
{

if ((newList !== "none") && (newList !== oldList))
{
let booksarr = {...this.state.books};
console.log('book is')
console.log(book);
booksarr[newList].push(book);

let updatedarr= booksarr[oldList].filter ((mybook)=> {
 return( mybook.title !== book.title);    
});

booksarr[oldList]=[...updatedarr];
//console.log('heeeey/n');
//console.log (updatedarr);
 this.setState (
   {
     books : booksarr            
   }
   )
   console.log('local state:'); 
   console.log(this.state);

return booksarr ;
}
  })

  
    handleSearch = 
 ((e) =>{
 this.setState (
    {
      query : e.target.value    
      
    }
    )
    console.log(this.state.query);
   }
 )
 


 searchChangeHandler = ((book,newList) =>
 {
 
 if (newList !== "none") 
 {

  /*Search if the book is in any of the lists */
 let booksarr = {...this.state.books};


 
 let updatedarr1= booksarr['currentlyReading'].filter ((mybook)=> {
  return( mybook.title !== book.title);    
 });

 let updatedarr2= booksarr['read'].filter ((mybook)=> {
  return( mybook.title !== book.title);    
 });

 let updatedarr3= booksarr['wantToRead'].filter ((mybook)=> {
  return( mybook.title !== book.title);    
 });
 
 booksarr['currentlyReading']=[...updatedarr1];
 booksarr['read']=[...updatedarr2];
 booksarr['wantToRead']=[...updatedarr3];

 booksarr[newList].push(book);



  this.setState (
    {
      books : booksarr            
    }
    )
 
 return booksarr ;
 }
   })


  render() {

    window.localStorage.setItem( 'State', JSON.stringify(this.state) );  
    let AllBooks = [];
    AllBooks =(this.state.books.wantToRead.concat (this.state.books.read)).concat(this.state.books.currentlyReading) 
console.log(AllBooks)
  

    return (
      <BrowserRouter>
      <div className="app">
        {this.state.showSearchPage ? 
        (
          <Route path="/search" exact render={()=>{return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to= "/" >
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={this.state.query || ''} onChange={(event)=> this.handleSearch(event)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"> 


                {
                AllBooks.map((book) => {
            return (
              <li key={book.id} >
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={book.style}></div>
                  <div className="book-shelf-changer">
                    <select onChange= {(event)=>this.searchChangeHandler(book,event.target.value)}>
                      <option value="move" disabled>Move to...</option>
                      <option value="none">None</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
              </div>
            </li> 
            )
            })}

            </ol>
              
            </div>
          </div>
           ) } }/> 

         ) : 
        
        (
        <Fragment>
           <Route path="/" exact render={()=>{return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BooksList books = {this.state.books} changeHandler={this.changeHandler}/>
            <div className="open-search">
            <Link to= "/search" >
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>\
            </Link>
            </div>
          </div>
           )}}/>
          </Fragment>
        
        )
        }
      </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
