import React, {Component} from 'react'

class BooksList extends Component {

render(){
    return(
        <ol className="books-grid">
       { this.props.allBooks.map((books , index) => {
       return <li key={index}>
             <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                    <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">To Kill a Mockingbird</div>
                <div className="book-authors">Harper Lee</div>
             </div>
      </li>
    })}
      </ol>
    )
 }
}

export default BooksList