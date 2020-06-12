import React from 'react'
import SingleReview from './SingleReview';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { Component } from 'react';
import { Redirect } from "react-router-dom"
import Moment from 'react-moment';
const axios = require("axios")

class BookDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            id:this.props.location.state.id,
            author:'',
            category:'',
            description:'',
            format:'',
            imagePath:'',
            isbn:'',
            price:'',
            publicationDate:'',
            publisher:'',
            qtyInStock:'',
            ratings:'',
            title:''
        }
        // this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        const that = this;

        console.log(localStorage);
        const data = {
            id:this.state.id
        }
        axios.post("http://localhost:8080/GetBook",data).then(function(res){
            console.log(res.data);
            that.setState({
                imgUrl:res.data.imgUrl,
                author:res.data.author,
                category:res.data.category,
                description:res.data.description,
                format:res.data.format,
                imagePath:res.data.imagePath,
                isbn:res.data.isbn,
                price:res.data.price,
                publicationDate:res.data.publicationDate,
                publisher:res.data.publisher,
                qtyInStock:res.data.qtyInStock,
                ratings:res.data.ratings,
                title:res.data.title
            })
            console.log("Book Data Received!");
        }).catch(function(error){
            console.log("Book data error ",error.response);
        }) 
    }

    render(){
        return (
            <div>
                <Navbar/>
                    <div class="book-details container">
                        <div class="grid product">
                            <div class="column-xs-12 column-md-7">
                                <div class="product-image">
                                    <img alt="" src={this.state.imagePath}/>
                                </div>
                            </div>
                            <div class="column-xs-12 column-md-5">
                                <div class="book-title">
                                    <h2 className="category">{this.state.category}</h2>
                                    <h1 className="title">{this.state.title}</h1>
                                    <h2 className="author">{this.state.author}-{this.state.format}</h2>
                                    <h2 className="price">US${this.state.price}</h2>
                                </div>
                                <div className="description">
                                    <p className="book-description">{this.state.description}</p><br/>
                                    <p className="isbn"><b>ISBN:</b>{this.state.isbn}</p>
                                    <p className="publisher"><b>Publisher:</b>{this.state.publisher}</p>
                                    <p className="publication-year"><b>Publication Date:</b><Moment format="YYYY/MM/DD">{this.state.publicationDate}</Moment></p><br/>
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
                    </div>
                <Footer/>
            </div>
    )
    }
    
}

export default BookDetails;


