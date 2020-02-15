import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

class ProfileDetails extends Component {
    state = {
        name:'',
        email:'',
        password:'',
        dateOfBirth:'',
        phoneNo:'',
        country:'',
        address:'',
        city:'',
        postalCode:'',
        billingCountry:'',
        billingAddress:'',
        billingCity:'',
        billingCode:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="profile-details">
                <Navbar/>
                 <form onSubmit={this.handleSubmit}>
                    <h1>Update Account</h1>
                    <div className="field-sets">
                        <fieldset>
                            <legend><span class="number">1</span> Your basic info</legend>
                            <input type="text" id="name" name="user_name" placeholder="Your Name*" onChange={this.handleChange}/>
                            <input type="email" id="email" name="user_email" placeholder="Your Email*" onChange={this.handleChange}/>
                            <input type="password" id="password" name="user_password" placeholder="Your Password*" onChange={this.handleChange}/>
                            <input type="date" id="dateOfBirth" name="date_of_birth" placeholder="Your Date of Birth" onChange={this.handleChange}/>
                            <input type="tel" id="phoneNo" name="phone_no" placeholder="Your Phone Number" onChange={this.handleChange}/>

                            <legend><span class="number">3</span> Billing Address</legend>
                            <input type="text" id="billingCountry" name="billing_country" placeholder="Country " onChange={this.handleChange}/>
                            <input type="text" id="billingAddress" name="billing_address" placeholder="Address " onChange={this.handleChange}/>
                            <input type="text" id="billingCity" name="billing_city" placeholder="City " onChange={this.handleChange}/>
                            <input type="text" id="billingCode" name="billing_code" placeholder="Postal Code " onChange={this.handleChange}/>   
                        </fieldset>
                        <fieldset class="addresses">
                            <legend><span class="number">2</span> Delivery Address</legend>
                            <input type="text" id="country" name="user_country" placeholder="Country " onChange={this.handleChange}/>
                            <input type="text" id="address" name="user_address" placeholder="Address " onChange={this.handleChange}/>
                            <input type="text" id="city" name="user_city" placeholder="City " onChange={this.handleChange}/>
                            <input type="text" id="postalCode" name="user_postal_code" placeholder="Postal Code " onChange={this.handleChange}/>  
                            <legend><span class="number">4</span> Payment Info</legend>
                            <input type="text" id="paymentMethod" name="payment_method" placeholder="Payment Method " onChange={this.handleChange}/>
                            <input type="text" id="paypalID" name="paypal_id" placeholder="Paypal ID" onChange={this.handleChange}/>                      
                        </fieldset>
                    </div>
                    <button type="submit">Update</button>
                </form>
                <Footer/>
            </div>
        );
    }
}


export default ProfileDetails;