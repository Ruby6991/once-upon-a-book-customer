import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OrderAddress extends Component {
    render() {
        return (
                <div className="profile-details">
                    <form>
                        <h1>Confirm Details</h1>
                        <div className="field-sets">
                            <fieldset>
                                <legend><span class="number">1</span> Billing Address</legend>
                                <input type="text" id="billingCountry" name="billing_country" placeholder="Country " />
                                <input type="text" id="billingAddress" name="billing_address" placeholder="Address " />
                                <input type="text" id="billingCity" name="billing_city" placeholder="City " />
                                <input type="text" id="billingCode" name="billing_code" placeholder="Postal Code " />   
                                <legend><span class="number">3</span> Payment Info</legend>
                                <input type="text" id="paymentMethod" name="payment_method" placeholder="Payment Method "/>
                                <input type="text" id="paypalID" name="paypal_id" placeholder="Paypal ID"/>  
                            </fieldset>
                            <fieldset class="addresses">
                                <legend><span class="number">2</span> Delivery Address</legend>
                                <input type="text" id="country" name="user_country" placeholder="Country " />
                                <input type="text" id="address" name="user_address" placeholder="Address " />
                                <input type="text" id="city" name="user_city" placeholder="City " />
                                <input type="text" id="postalCode" name="user_postal_code" placeholder="Postal Code " />                      
                            </fieldset>
                        </div>
                        <button type="submit">Checkout</button>
                    </form>
                </div>
        );
    }
}

export default OrderAddress;