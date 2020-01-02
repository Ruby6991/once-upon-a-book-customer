import React from 'react'

const BookSummary = () => {
    return(
        <div class="product">
            <img alt="shoes1" src="https://hpmedia.bloomsbury.com/rep/s/978%201408855928_309033.jpeg"/>
            <div>
                <h2>SOME SHOES</h2>
                <p class="price">15<sup>.00</sup></p>
                <p class="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <b>incididunt ut labore et dolore magna aliqua</b></p>
                <br/>
                <a href="#"><p>Add to cart</p></a>
            </div>
        </div>
    )
}

export default BookSummary