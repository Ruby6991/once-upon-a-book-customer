import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Once Upon A Book</h5>
                <p class="grey-text text-lighten-4">Taking advantage of vast warehouses across the Sri Lanka, 
                    we stock over 1 million titles for immediate delivery -- that's more titles than any other online bookseller in Sri Lanka.
                    With so many titles, it is vital to give customers an easy way to find precisely the books they are looking for. 
                </p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><NavLink to='/contact'>Contact Us</NavLink></li>
                  <li><NavLink to='/'>FAQ</NavLink></li>
                  <li><NavLink to='/'>About</NavLink></li>
                  <li><NavLink to='/'>Help</NavLink></li>
                  <li><NavLink to='/account'>My Account</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2020  Once Upon A Book Ltd.
            </div>
          </div>
        </footer>
    )
}

export default Footer;