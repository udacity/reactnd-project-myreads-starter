import React, { Component } from 'react';
import Section from "./Section";

class BookShelf extends Component {
  state = {
    sectionDetails: [
      {
        name: "Currently Reading",
        key: 'currentlyReading',
        bookIds: [
          "nggnmAEACAAJ", "sJf1vQAACAAJ"
        ]
      },
      {
        name: 'Want To Read',
        key: 'wantToRead',
        bookIds: [
          "jAUODAAAQBAJ", "IOejDAAAQBAJ",
          "1wy49i-gQjIC", "qIjQjgEACAAJ",
          "qXXHAgAAQBAJ", "PFIfAQAAIAAJ"
        ]
      },
      {
        name: 'Read',
        key: 'read',
        bookIds: [
          "evuwdDLfAyYC", "74XNzF_al3MC",
          "5bgEyjAtLhEC", "Du_mTZwlWRUC"
        ]
      }
    ]
  };

  findSection = (searchSection) => {
    console.log("What am I searching here?", searchSection)
    return this.state.sectionDetails.find(section => (
      section.name === searchSection
    ))
  };

  removeBookFromSection = (section, bookToRemove) => {
    console.log("Inside removeBook", bookToRemove, section);
    const books = section.books.filter(book => (
      book.title !== bookToRemove.title
    ));

    return {
      ...section,
      books
    }
  };

  addBookToSection = (section, bookToAdd) => {
    console.log("Inside addBookToSection", section, bookToAdd)
    const books = section.books.concat(bookToAdd);

    return {
      ...section,
      books
    }
  };

  updateBookShelfState = (newState) => {
    const prevState = this.findSection(newState.name);
    this.setState(() => {
      Object.assign(prevState, newState, {})
    })
  };

  handleSectionChange = (newSection, currentSection, bookToUpdate) => {
    console.log('not here tough')
    console.log("Inside BookShelf", newSection, currentSection, bookToUpdate);

    const previousSectionBooks = this.findSection(currentSection);
    console.log("Previous section books", previousSectionBooks)
    const updatedPreviousSection = this.removeBookFromSection(previousSectionBooks, bookToUpdate)
    this.updateBookShelfState(updatedPreviousSection);

    console.log("New section ----> ", newSection);
    const updateNewSection = this.findSection(newSection);
    const updatedNewSection = this.addBookToSection(updateNewSection, bookToUpdate)
    console.log("What is the value of updateNewSection", updatedNewSection)
    this.updateBookShelfState(updatedNewSection)
  };

  handleAddBook = () => {
    this.props.history.push('/search')
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {
            this.state.sectionDetails.map((section, index) => (
              <Section
                section={section}
                key={index}
                onSectionChange={this.handleSectionChange}
              />
            ))
          }
        </div>
        <div className="open-search">
          <button onClick={this.handleAddBook}>Add a book</button>
        </div>
      </div>
    )
  }
}


export default BookShelf;
