import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPICalls from '../BooksAPI'
import BookLists from './BookList'
class BookSearch extends Component {

    state ={
        books:[] ,
        query: ''
    }

    onQueryUpdate = (query , event) => {
        this.setState({query: query.trim()})
        if(this.state.query.length > 0){
            BooksAPICalls.search(this.state.query).then(books => {
                this.setState({books})
            }).catch(err => {
                console.log(err + 'this happen')
            })
        }
    }

    getshelfinfoSearch = (book , e ) => {
        this.props.updateShelf(book , e)
        }

render(){

    return(
        <div className="search-books">
        <div className="search-books-bar">
            <Link className="close-search" to="/" >
            Close</Link>
            <div className="search-books-input-wrapper">
                {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={(event) => {this.onQueryUpdate(event.target.value)}}
                onSubmit={(event) => {this.callToApi(event.target.value)}}/>
            </div>
        </div>
        <div className="search-books-results">
            {this.state.query.length > 0 && (
            <BookLists allBooks={this.state.books}  changeShelf={this.getshelfinfoSearch}/>
            )}
        </div>
        </div>
    )
}

}

export default BookSearch