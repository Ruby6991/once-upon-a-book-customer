import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import M from 'materialize-css'
import { Redirect } from "react-router-dom";
const axios = require("axios");

class OrderAddress extends Component {
    constructor(props){
        super(props);
        this.state={
            currentOrder:this.props.location.state.currentOrder,
            orderedBooks:this.props.location.state.orderedBooks,
            total:this.props.location.state.totalAmount,
            firstName:'',
            lastName:'',
            phoneNo:'',
            address:'',
            paymentMethod:'',
            isConfirmed:false
        }
        this.confirmCheckout = this.confirmCheckout.bind(this);
        console.log(this.state);
    }

    componentDidMount(){
        const select = document.querySelectorAll('select');
        M.FormSelect.init(select, {});

        const that = this;

        const token = 'Bearer '+ localStorage.token;
        const headersInfo = {
            Authorization:token
        }
        const data = {
            email:localStorage.email
        }
        axios.post("http://localhost:8080/GetUser",data,{
            headers:headersInfo
        }).then(function(res){
            console.log(res.data);
            const data = res.data;
            
            that.setState({
                firstName:data.firstName,
                lastName:data.lastName,
                phoneNo:data.phoneNo,
                address:data.address
            })
        }).catch(function(error){
            console.log(error);
            if(error.response.status===401){
                localStorage.removeItem("token");
                localStorage.removeItem("email");
                localStorage.removeItem("name");
                that.setState({
                    redirectToHome:true
                })
            }
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    confirmCheckout = (e) => {
        e.preventDefault();
        const that=this;
        const token = 'Bearer '+ localStorage.token;
        const headersInfo = {
            Authorization:token
        }
       
        let data = {
            paymentMethod:this.state.paymentMethod,
            totalAmount:this.state.total
        }

        axios.put("http://localhost:8080/UpdateOrderCheckOut/"+this.state.currentOrder.id,data,{
            headers:headersInfo
        })
        .then(function(res){
            console.log(res.data);
            console.log("Order Confirmed successfully!");
            alert("Order Confirmed  successfully!");
            that.setState({
                isConfirmed:true
            }, () => {
                const userData = {
                    email:localStorage.email
                }
                const newOrder = {
                    user :userData
                }
                axios.post("http://localhost:8080/CreateOrder",newOrder,{
                headers:headersInfo
                })
                    .then(function(res){
                        console.log("Order created successfully!");
                    }).catch(function(error){
                        console.log("Order creation un-successful!\nError : ",error.response);
                })   
            })
        }).catch(function(error){
            console.log("Order Confirmation un-successful!\nError : ",error);
            alert("Order Confirmation un-successful!");
        })
    }

    render() {
        return (
                <div className="profile-details">
                    {
                    this.state.isConfirmed?(
                        <Redirect to="/dashboard"/>
                    ):("")
                    }
                    <Navbar/>
                    <form>
                        <h1>Confirm Details</h1>
                        <div className="field-sets">
                            <fieldset>
                                <legend><span class="number">1</span> Customer Details</legend>
                                <input type="text" id="firstName" name="first_name" placeholder="First Name*" value={this.state.firstName} onChange={this.handleChange}/>
                                <input type="text" id="lastName" name="last_name" placeholder="Last Name*" value={this.state.lastName} onChange={this.handleChange}/>
                                <input type="tel" id="phoneNo" name="phone_no" placeholder="Phone Number" value={this.state.phoneNo} onChange={this.handleChange}/>
                                <legend><span class="number">2</span> Delivery Address</legend>
                                <input type="text" id="address" name="address" placeholder="Address " value={this.state.address} />
                                <legend><span class="number">3</span> Payment Info</legend>
                                <div class="input-field">
                                    <select id="paymentMethod" onChange={this.handleChange}>
                                        <option value="" disabled selected>Choose Payment Method</option>
                                        <option value="COD">COD</option>
                                        <option value="Card">Card</option>
                                        <option value="Paypal">PayPal</option>
                                    </select>
                                </div>
                                <input type="text" id="totalAmount" name="total_amount" placeholder="Total Amount" value={'US$'+this.state.total}/>  
                            </fieldset>
                        </div>
                        <button id="updateAcc" onClick={this.confirmCheckout}>Checkout</button>
                    </form>
                    <Footer/>
                </div>
        );
    }
}

export default OrderAddress;