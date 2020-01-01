import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import Logo from './logo.png'
import ResponsiveMenu from 'react-responsive-navbar';

const Navbar = () => {
    return(
        <nav class="nav-extended">
            <div class="nav wrapper white">
                <h4 class="blue-grey-text text-darken-4">Once Upon A Book</h4>
            </div>
            <div class="nav wrapper">
                {/* <SignedInLinks/> */}
                <SignedOutLinks/>
            </div>
        </nav>      
    )
}

export default Navbar;