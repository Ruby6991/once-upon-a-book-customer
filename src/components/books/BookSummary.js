import React from 'react'
import BookDetails from './BookDetails'
import { Component } from 'react'
import { Redirect } from "react-router-dom"

class BookSummary extends Component {
    constructor(props){
        super(props);
        this.state={
            imagePath:this.props.book.imagePath,
            title:this.props.book.title,
            price:this.props.book.price,
            id:this.props.book.id,
            description:this.props.book.description,
            redirectToDetails:false
        }
        this.viewDetails = this.viewDetails.bind(this);
        console.log(this.state);
    }

    viewDetails(){
        this.setState({
            redirectToDetails:true
        })
    }

    render(){
        return(
            <div class="product">
                {
                    this.state.redirectToDetails?(
                        <Redirect to={{
                            state: { id: this.state.id },
                            pathname: '/book/'+this.state.id 
                          }}/>
                    ):("")
                }
                <img alt="" src={this.state.imagePath}/>
                <div>
                    <h2>{this.state.title}</h2>
                    <p class="price">US${this.state.price}</p>
                    <p class="descr">{this.state.description}</p>
                    <br/>
                    <a href="#details" onClick={this.viewDetails}><p>More Info</p></a>
                </div>
            </div>
        )
    }
    
}

export default BookSummary