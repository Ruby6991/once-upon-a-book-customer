import React from 'react'
import SingleReview from './SingleReview';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const BookDetails = (props) => {
    const id= props. match. params. id;
    const format='Paperback';
    return (
            <div class="book-details container">
                <Navbar/>
                <div class="grid product">
                    <div class="column-xs-12 column-md-7">
                        <div class="product-image">
                            <img src="https://hpmedia.bloomsbury.com/rep/s/978%201408855928_309033.jpeg"/>
                        </div>
                    </div>
                    <div class="column-xs-12 column-md-5">
                        <div class="book-title">
                            <h2 className="category">Category Name</h2>
                            <h1 className="title">Harry Potter and the Goblet of Fire -{id}</h1>
                            <h2 className="author">J.K.Rowling-{format}</h2>
                            <h2 className="price">Rs.1540.00</h2>
                        </div>
                        <div className="description">
                            <p className="book-description">Harry Potttaaaa Did Ya Put YA NAME IN THE GOBLET OF FIREEEEEEEE</p>
                            <p className="isbn">ISBN:</p>
                            <p className="publisher">Publisher:</p>
                            <p className="publication-year">Publication Year:</p>
                        </div>
                        <div className="item-buttons">
                            <button class="add-to-cart">Add To Cart</button>
                            <button id="favorite">Add To Wishlist</button>
                        </div>
                    </div>
                </div>
                <h1>Product Reviews</h1>
                <div class="grid reviews">
                    <SingleReview/>
                    <SingleReview/>
                    <SingleReview/>
                    <SingleReview/>
                    <SingleReview/>
                </div>
                <Footer/>
            </div>
    )
}

export default BookDetails


