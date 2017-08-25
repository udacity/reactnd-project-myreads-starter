import React,{Component} from 'react'
import {Link} from 'react-router-dom'


class AddBook extends Component{


	render(){
		return(
			<div>
				<Link to="/">Close</Link>
				<p>AddBook</p>
			</div>
		)
	}
}

export default AddBook