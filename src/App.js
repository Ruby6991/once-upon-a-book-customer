import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/common/Dashboard'
import Contact from './components/common/ContactUs'
import Account from './components/profile/Profile'
import Cart from './components/profile/Cart'
import Footer from './components/layout/Footer'
import BookDetails from './components/books/BookDetails'
import SignInAndJoin from './components/auth/SignInAndJoin'
import ProfileDetails from './components/profile/ProfileDetails'
import PurchaseHistory from './components/profile/PurchaseHistory'
import Wishlist from './components/profile/Wishlist'
import OrderAddress from './components/profile/OrderAddress'
import axios from 'axios'

class App extends Component {
  componentDidMount(){

  }

  render(){
    return(
       <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={SignInAndJoin}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/account' component={Account}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/logout" component={SignInAndJoin}/>
            <Route path='/book/:id' component={BookDetails}/>
            <Route path='/orderaddress' component={OrderAddress}/>
            <Route path='/profiledetails' component={ProfileDetails}/>
            <Route path='/purchasehistory' component={PurchaseHistory}/>
            <Route path='/wishlist' component={Wishlist}/>
          </Switch>
        </div>
      </BrowserRouter> 
      
    );
  }
}

export default App;
