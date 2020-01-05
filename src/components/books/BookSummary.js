import React from 'react'
import BookDetails from './BookDetails'

const BookSummary = ({book}) => {
    return(
        <div class="product">
            <img alt="shoes1" src={book.img}/>
            <div>
                <h2>{book.title}</h2>
                <p class="price">15<sup>.00</sup></p>
                <p class="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <b>incididunt ut labore et dolore magna aliqua</b></p>
                <br/>
                <a href="/BookDetails"><p>Add to cart</p></a>
            </div>
        </div>
    )
}

export default BookSummary