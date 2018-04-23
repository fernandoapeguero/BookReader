import React, {Component } from 'react'
import {Link} from 'react-router-dom'
import BookList from './BookList'

import * as BookApiCalls from '../BooksAPI'
class BookShelf extends Component {

    state = {
      bookstands: ['Currently Reading','Want to Read' ,'Read'],
      books: []

    }

    componentDidMount(){

        BookApiCalls.getAll().then(books => {
            this.setState({books})

        })
    }

render(){

  return(
    <div>
    <div  className="bookshelf">
       <h2 className="bookshelf-title">Currently Reading</h2>
       <div className="bookshelf-books">
          <BookList allBooks={this.state.books.filter(book => book.shelf === 'currentlyReading')}  />
       </div>
    </div>
    <div className="bookshelf">
       <h2 className="bookshelf-title">Want to Read</h2>
       <div className="bookshelf-books">
          <BookList allBooks={this.state.books.filter(book => book.shelf === "wantToRead")}  />
       </div>
    </div>
    <div  className="bookshelf">
       <h2 className="bookshelf-title">Read</h2>
       <div className="bookshelf-books">
          <BookList allBooks={this.state.books.filter(book => book.shelf === "read")}  />
       </div>
    </div>
    <div className="open-search">
       <Link to="/Search" >
       Add a book</Link>
    </div>
 </div>
   )
 }

}

export default BookShelf