import React from 'react'
import {Link} from 'react-router-dom'

const AddBookButton = () => {
  return (
    <Link className="open-search" to='/search'><button>Add a book</button></Link>
  )
}

export default AddBookButton