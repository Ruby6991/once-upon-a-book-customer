import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul>
            <li><NavLink to='/'><i class="material-icons left">home</i>Home</NavLink></li>
            <li><NavLink to='/'><i class="material-icons left">info</i>About</NavLink></li>
            <li><NavLink to='/'><i class="material-icons left">email</i>Contact Us</NavLink></li>
            <li><NavLink to='/'><i class="material-icons right">open_in_new</i>Logout</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;