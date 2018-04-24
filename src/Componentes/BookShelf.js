import React, {Component } from 'react'
import {Link} from 'react-router-dom'
import BookList from './BookList'

import * as BookApiCalls from '../BooksAPI'
class BookShelf extends Component {

    state = {
      bookstands: ['Currently Reading','Want to Read' ,'Read'],
      books: []

    }

    // componentDidMount(){
    //     BookApiCalls.getAll().then(books => {
    //         this.setState({books})

    //     })
    // }

    //   updateBookShelf = (book , e ) => {

    //     BookApiCalls.update(book , e).then(() => {

    //       book.shelf = e;
    //    this.setState(state => ({
    //      books: state.books.filter(bk => bk.id !== book.id).concat([book])
    //    }))
    // })

// }

getshelfinfo = (book , e ) => {

this.props.updateShelf(book , e)

}
render(){

  return(
    <div>
    <div  className="bookshelf">
       <h2 className="bookshelf-title">Currently Reading</h2>
       <div className="bookshelf-books">
          <BookList allBooks={this.props.books.filter(book => book.shelf === "currentlyReading")} changeShelf={this.getshelfinfo} />
       </div>
    </div>
    <div className="bookshelf">
       <h2 className="bookshelf-title">Want to Read</h2>
       <div className="bookshelf-books">
          <BookList allBooks={this.props.books.filter(book => book.shelf === "wantToRead")} changeShelf={this.getshelfinfo} />
       </div>
    </div>
    <div  className="bookshelf">
       <h2 className="bookshelf-title">Read</h2>
       <div className="bookshelf-books">
          <BookList allBooks={this.props.books.filter(book => book.shelf === "read")} changeShelf={this.getshelfinfo} />
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