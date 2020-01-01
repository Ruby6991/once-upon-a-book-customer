import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <ul>
            <li><NavLink to='/'><i class="material-icons left">home</i>Home</NavLink></li>
            <li><NavLink to='/'><i class="material-icons left">info</i>About</NavLink></li>
            <li><NavLink to='/'><i class="material-icons left">email</i>Contact Us</NavLink></li>
            <li><NavLink to='/'><i className="material-icons left">account_circle</i>Sign in/Join</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;