import React, { Component } from 'react';

class ProfileDetails extends Component {
    render() {
        return (
            <div className="profile-details">
                 <form>
                    <h1>Update Account</h1>
                    <div className="field-sets">
                        <fieldset>
                            <legend><span class="number">1</span> Your basic info</legend>
                            <input type="text" id="name" name="user_name" placeholder="Your Name*"/>
                            <input type="email" id="email" name="user_email" placeholder="Your Email*"/>
                            <input type="password" id="password" name="user_password" placeholder="Your Password*"/>
                            <input type="date" id="dateOfBirth" name="date_of_birth" placeholder="Your Date of Birth"/>
                            <input type="tel" id="phoneNo" name="phone_no" placeholder="Your Phone Number"/>

                            <legend><span class="number">3</span> Billing Address</legend>
                            <input type="text" id="country" name="user_country" placeholder="Country "/>
                            <input type="text" id="address" name="user_address" placeholder="Address "/>
                            <input type="text" id="city" name="user_city" placeholder="City "/>
                            <input type="text" id="postalCode" name="user_postal_code" placeholder="Postal Code "/>   
                        </fieldset>
                        <fieldset class="addresses">
                            <legend><span class="number">2</span> Delivery Address</legend>
                            <input type="text" id="country" name="user_country" placeholder="Country "/>
                            <input type="text" id="address" name="user_address" placeholder="Address "/>
                            <input type="text" id="city" name="user_city" placeholder="City "/>
                            <input type="text" id="postalCode" name="user_postal_code" placeholder="Postal Code "/>  
                            <legend><span class="number">4</span> Payment Info</legend>
                            <input type="text" id="paymentMethod" name="payment_method" placeholder="Payment Method "/>
                            <input type="text" id="paypalID" name="paypal_id" placeholder="Paypal ID"/>                      
                        </fieldset>
                    </div>
                    <button type="submit">Update</button>
                    
                </form>
            </div>
        );
    }
}


export default ProfileDetails;