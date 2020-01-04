import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="user-profile">
                <div class="container">
                    <img src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
                    <p class="title">Account</p>
                    <div class="overlay"></div>
                    <div class="button"><a href="#"> <i class="fa fa-user"></i>Update Account</a></div>
                </div>
                <div class="container">
                    <img src="https://images.unsplash.com/photo-1514894780887-121968d00567?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80" alt="" />
                    <p class="title">Wishlist</p>
                    <div class="overlay"></div>
                    <div class="button"><a href="#"> <i class="fa fa-list"></i>View Wishlist</a></div> 
                    {/* can be linked to booklist itslef */}
                </div>
                <div class="container">
                    <img src="https://images.unsplash.com/photo-1488769829622-18df7a3c844a?ixlib=rb-1.2.1&auto=format&fit=crop&w=693&q=80" alt="" />
                    <p class="title">Purchase History</p>
                    <div class="overlay"></div>
                    <div class="button"><a href="#"> <i class="fa fa-history"></i>View Purchase History</a></div>
                </div>
            </div>
        );
    }
}

export default Profile;