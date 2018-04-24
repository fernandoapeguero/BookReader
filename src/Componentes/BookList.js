import React from 'react'
import PropTypes from 'prop-types'

const BooksList = (props) => {

   BooksList.PropTypes = {

      allBooks: PropTypes.array.isRequired

    }

    return(
     <ol className="books-grid">
        {props.allBooks.map((books , index) => {
        return   <li key={index}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks !== undefined ? books.imageLinks.thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYm-bXe-K0ZCH-RoQ5cxzgyBy6w8XEtGPq-cHX1o6XpASE_5Gfw"})` }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select value={books.shelf} onChange={(event) =>
                                props.changeShelf(books , event.target.value)}>
                                <option value="none" >Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{books.title}</div>
                    <div className="book-authors">{books.authors}</div>
                    </div>
                </li>
            })}
     </ol>)
}

export default BooksList