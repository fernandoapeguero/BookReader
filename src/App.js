import React from 'react'
import {Route} from 'react-router-dom'
import BookShelf from './Componentes/BookShelf'
import BooksSearch from './Componentes/BookSearch'
import * as BookApiCalls from "./BooksAPI"
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  books: []
  }


  componentDidMount(){
    BookApiCalls.getAll().then(books => {
        this.setState({books})

    })
}


  updateBookShelf = (book , e ) => {

    BookApiCalls.update(book , e).then(() => {

      book.shelf = e;
   this.setState(state => ({
     books: state.books.filter(bk => bk.id !== book.id).concat([book])
   }))
})
  }


  render() {
    return (

      <div className="app">
      <Route exact path='/' render={() => (

          <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf updateShelf={this.updateBookShelf}  books={this.state.books}/>
            </div>
          </div>
      )} />

      <Route path="/Search" render={({history})=> (
           <BooksSearch updateShelf={this.updateBookShelf} changeShelf={(book , e) => {
             this.updateBookShelf(book, e)

           }} />
    )}/>
    </div>

    )
  }
}

export default BooksApp
