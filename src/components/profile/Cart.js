import React, { Component } from 'react';
import CartItem from './CartItem';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { Redirect } from "react-router-dom";
const axios = require("axios")

class Cart extends Component {
    constructor(props){
        super(props);
        this.state={
            currentOrder:'',
            orderedBooks:[],
            subTotal:'',
            total:'',
            continueToShop:false,
            checkout:false
        }
        this.checkout = this.checkout.bind(this);
        this.continueShop = this.continueShop.bind(this);
    }

    componentDidMount(){
        const that = this;
        const token = 'Bearer '+ localStorage.token;
        const headersInfo = {
            Authorization:token
        }
        const data = {
            email:localStorage.email
        }
        console.log(headersInfo);
        axios.post("http://localhost:8080/GetCurrentOrder",data,{
            headers:headersInfo
        }).then(function(res){
            that.setState({
                currentOrder:res.data,
                orderedBooks:res.data.orderedBooks
            }, () => {
                let totalAmount = 0;
                for(let a=0; a<that.state.orderedBooks.length;a++){
                    totalAmount = totalAmount+(that.state.orderedBooks[a].book.price * that.state.orderedBooks[a].quantity);
                }

                let roundSubTotal = totalAmount.toFixed(2);
                roundSubTotal=parseFloat(roundSubTotal);
                let roundTotal=roundSubTotal+0.99;
                roundTotal=roundTotal.toFixed(2);
                roundTotal=parseFloat(roundTotal);
               
                that.setState({
                    subTotal:roundSubTotal,
                    total:roundTotal
                })
            } )
            console.log(res.data);
        }).catch(function(error){
            console.log(error);
        })
    }

    checkout(){
        this.setState({
            checkout:true
        })
    }

    continueShop(){
        this.setState({
            continueToShop:true
        })
    }

    render() {
        return (
            <div className="cart-wrapper">
                {
                   this.state.continueToShop?(
                       <Redirect to="/dashboard"/>
                   ):("")
                }
                {
                   this.state.checkout?(
                       <Redirect to={{
                            state: {currentOrder:this.state.currentOrder,
                                    orderedBooks:this.state.orderedBooks,
                                    totalAmount:this.state.total},
                            pathname: '/orderaddress'
                          }}/>
                   ):("")
                }
                <Navbar/>
                <div class="wrap cf">
                    <div class="heading cf">
                        <h1>My Cart</h1>
                        <a href="" class="continue" onClick={this.continueShop}>Continue Shopping</a>
                    </div>
                    <div class="cart">
                        <ul class="cartWrap">
                        { this.state.orderedBooks && this.state.orderedBooks.map(orderedBook => {
                            return(
                                 <CartItem orderedBook={orderedBook} key={orderedBook.book.id} order={this.state.currentOrder}/> 
                            ) 
                        })}
                        </ul>
                    </div>
                    <div class="subtotal cf">
                        <ul>
                            <li class="totalRow"><span class="label">Subtotal</span><span class="value">US${this.state.subTotal}</span></li>
                            <li class="totalRow"><span class="label">Shipping</span><span class="value">US$0.99</span></li>
                            <li class="totalRow final"><span class="label">Total</span><span class="value">US${this.state.total}</span></li>
                            <li class="totalRow"><a href="" class="btn continue" onClick={this.checkout} >Checkout</a></li>
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Cart;