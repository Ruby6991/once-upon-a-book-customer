import React, { Component } from 'react';
import SingleOrder from './SingleOrder';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Moment from 'react-moment';
const axios = require("axios");

class PurchaseHistory extends Component {
    constructor(props){
        super(props);
        this.state={
            orders:[]
        }
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
        
        axios.post("http://localhost:8080/GetOrderListByUser",data,{
            headers:headersInfo
        }).then(function(res){
            that.setState({
                orders:res.data
            })
            console.log(res.data);
        }).catch(function(error){
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="purchase-history">
                <h1>Purchase History</h1>
                    <table class="container">
                        <thead>
                            <tr>
                                <th><h1>Order ID</h1></th>
                                <th><h1>Date</h1></th>
                                <th><h1>Status</h1></th>
                                <th><h1>Total</h1></th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.orders && this.state.orders.map(order => {
                                if(order.status!=="Pending"){
                                    return(
                                    <tr>
                                        <td>{order.id}</td>
                                        <td><Moment format="YYYY/MM/DD">{order.purchasedDate}</Moment></td>
                                        <td>{order.status}</td>
                                        <td>{"US$"+order.totalAmount}</td>
                                    </tr>
                                ) 
                                }
                            })}
                        </tbody>
                    </table>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default PurchaseHistory;