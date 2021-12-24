import React from 'react'
import { useSelector } from 'react-redux'
import Book from '../book/Book'

const BooksList = ({ping,setping}) => {
    const books = useSelector(state => state.book.books)
    return (
        <div>
            
            {books.map((book)=><Book book={book} ping={ping} setping={setping}/>)}
        </div>
    )
}

export default BooksList
