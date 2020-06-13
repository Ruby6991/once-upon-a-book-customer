import React from 'react'
import { Component } from 'react';
const axios = require("axios")

class CartItem extends Component {
    constructor(props){
        super(props);
        this.state={
            orderedBook:this.props.orderedBook,
            imagePath:this.props.orderedBook.book.imagePath,
            title:this.props.orderedBook.book.title,
            id:this.props.orderedBook.book.id,
            quantity:this.props.orderedBook.quantity,
            price:this.props.orderedBook.book.price,
            currentOrder:this.props.order
        }
        this.decreaseQty = this.decreaseQty.bind(this);
        this.increaseQty = this.increaseQty.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    decreaseQty(){
        const token = 'Bearer '+ localStorage.token;
        const headersInfo = {
            Authorization:token
        }
        const order1 = {
            id:this.state.currentOrder.id
        }
        const book1 = {
            id:this.state.id
        }
        let newOrder = {
            order:order1,
            book:book1
        }
        console.log(newOrder);
        axios.put("http://localhost:8080/updateBookQuantity/decrease",newOrder,{
        headers:headersInfo
        })
            .then(function(res){
                console.log(res.data);
                console.log("Book Quantity Decreased successfully!");
                window.location.reload();
            }).catch(function(error){
                console.log("Book Quantity Decrease un-successful!\nError : ",error);
                alert("Book Quantity Decrease un-successful!");
        })
    }

    increaseQty(){
        const token = 'Bearer '+ localStorage.token;
        const headersInfo = {
            Authorization:token
        }
        const order1 = {
            id:this.state.currentOrder.id
        }
        const book1 = {
            id:this.state.id
        }
        let newOrder = {
            order:order1,
            book:book1
        }
        console.log(newOrder);
        axios.put("http://localhost:8080/updateBookQuantity/increase",newOrder,{
        headers:headersInfo
        })
            .then(function(res){
                console.log(res.data);
                console.log("Book Quantity Increased successfully!");
                window.location.reload();
            }).catch(function(error){
                console.log("Book Quantity Increase un-successful!\nError : ",error);
                alert("Book Quantity Increase un-successful!");
        })
    }

    removeItem(){
        const token = 'Bearer '+ localStorage.token;
        const headersInfo = {
            Authorization:token
        }
        const order1 = {
            id:this.state.currentOrder.id
        }
        const book1 = {
            id:this.state.id
        }
        let newOrder = {
            order:order1,
            book:book1
        }
        console.log(newOrder);
        axios.delete("http://localhost:8080/DeleteOrderBook/"+this.state.currentOrder.id+"/"+this.state.id,{
        headers:headersInfo
        })
            .then(function(res){
                console.log(res.data);
                console.log("Book Removed from Cart successfully!");
                window.location.reload();
            }).catch(function(error){
                console.log("Book removal un-successful!\nError : ",error.response);
                alert("Book removal un-successful!");
        })
    }

    render(){
        return (
            <li class="items odd">   
                <div class="infoWrap container"> 
                    <div class="cartSection col s9 left-align">
                        <img src={this.state.imagePath} alt="" class="itemImg" />
                        <p class="itemNumber">#QUE-00{this.state.id}</p>
                        <div style={{width:600+'px'}}><h3>{this.state.title}</h3></div>
                        <p class="quantity">Quantity <span class="fa fa-angle-left angle" onClick={this.decreaseQty}></span>
                        <span id="qt">{this.state.quantity}</span><span class="fa fa-angle-right angle" onClick={this.increaseQty}></span></p>
                    </div>   
                    <div class="prodTotal cartSection col s2 right-align">
                        <p>US${this.state.price}</p>
                    </div>
                    <div class="cartSection removeWrap col s1 right-align">
                        <a href=""  class="remove" onClick={this.removeItem} >x</a>
                    </div>
                </div>
            </li>
        )
    }
    
}

export default CartItem;
