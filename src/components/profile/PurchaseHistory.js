import React, { Component } from 'react';
import SingleOrder from './SingleOrder';

class PurchaseHistory extends Component {
    render() {
        return (
            <div className="purchase-history">
            <h1>Purchase History</h1>
                <table class="container">
                    <thead>
                        <tr>
                            <th><h1>Order ID</h1></th>
                            <th><h1>Date</h1></th>
                            <th><h1>No. of Items</h1></th>
                            <th><h1>Total</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        <SingleOrder/>
                        <SingleOrder/>
                        <SingleOrder/>
                        <SingleOrder/>
                        <SingleOrder/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PurchaseHistory;