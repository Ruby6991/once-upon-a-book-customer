import React from 'react'
import BookSummary from './BookSummary'

const BookList = ({books}) => {
    return(
        <section>
            <div id="test-swipe-1" class="list">
                {/* books &&-makes sure it only works if there are existing books in the db */}
                { books && books.map(book => {
                    return(
                        <BookSummary book={book} key={book.id}/>
                    )
                })}
            </div>
        </section>
    )
}

export default BookList;