import React from 'react'
import Selector from './Selector.js'


class Book extends React.Component{
	render(){
		return(
			<div className="book">
			  <div className="book-top">
			   <img className="book-cover" src={this.props.image} style={{ width: 128, height: 188 }}/>
			    <Selector/>
			  </div>
			  <div className="book-title">{this.props.title}</div>
			  <div className="book-authors">{this.props.author}</div>
			</div>
		)
	}
}

export default Book
