import React from 'react'
import BookSummary from './BookSummary'

const BookList = () => {
    return(
        <section>
            <div id="test-swipe-1" class="list">
                <BookSummary/>
                <BookSummary/>
                <BookSummary/>
                <BookSummary/>
            </div>
            <div class="list">
                <BookSummary/>
                <BookSummary/>
                <BookSummary/>
                <BookSummary/>
            </div>
        </section>
    )
}

export default BookList;