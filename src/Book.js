import React,{Component} from 'react';
import FrontPage from './FrontPage.js'
import './App.css'

class Book extends Component{

  constructor(props){
    super(props)

  }

  handleChange( shelfName) {
      //this.setState({value: event.target.value});

  //console.log(shelfName)
  //console.log(this.props.book.shelf);
  alert(shelfName +" this is the changed shelf name")
  this.props.onUpdateShelf(shelfName, this.props.book)

    }


updateShelf(){

}

render(){
return(
<div>
<li>
<div className="book">
<div className="book-top">


           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.image})` }}></div>
           <div className="book-shelf-changer">
             <select value={this.props.book.shelf || 'none' } onChange={change => this.handleChange( change.target.value)}>
               <option value="none" disabled>Move to...</option>
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
</li>
</div>
)
}

}
export default Book
