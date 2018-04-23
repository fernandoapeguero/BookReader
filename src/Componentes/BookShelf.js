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
    {this.state.bookstands.map((stands, index) => {
     console.log(this.state.books)
      return  <div key={index} className="bookshelf">
        <h2 className="bookshelf-title">{stands}</h2>
          <div className="bookshelf-books">

              <BookList allBooks={this.state.books} shelf={stands.trim()} />

           </div>
        </div>

    })}
    <div className="open-search">
              <Link to="/Search" >Add a book</Link>
    </div>
    </div>
   )
 }

}

export default BookShelf