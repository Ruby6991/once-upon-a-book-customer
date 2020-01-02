import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="nav-extended">
            <div class="nav wrapper white">
                <h4 class="blue-grey-text text-darken-4">Once Upon A Book</h4>
            </div>
            <div class="nav wrapper">
                <ul>
                    <li><NavLink to='/'><i class="material-icons left">home</i>Home</NavLink></li>
                    <li><NavLink to='/contact'><i class="material-icons left">email</i>Contact Us</NavLink></li>
                    <li><NavLink to='/account'><i class="material-icons left">account_circle</i>My Account</NavLink></li>
                    <li><NavLink to='/cart'><i class="material-icons left">shopping_cart</i>Cart</NavLink></li>
                    <li><NavLink to='/welcome'><i class="material-icons left">open_in_new</i>Logout</NavLink></li>
                </ul>
            </div>
        </nav>   
    )
}

export default Navbar;