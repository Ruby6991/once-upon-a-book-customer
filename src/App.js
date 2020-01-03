import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/common/Dashboard'
import Contact from './components/common/ContactUs'
import Account from './components/profile/Profile'
import Cart from './components/profile/Cart'
import Footer from './components/layout/Footer'
import BookDetails from './components/books/BookDetails';


// import M from "materialize-css/dist/js/materialize.min.js";

class App extends Component {
  // componentDidMount() {
    // var dropdowns = document.querySelectorAll('.dropdown-trigger')
    // for (var i = 0; i < dropdowns.length; i++){
    //     M.Dropdown.init(dropdowns[i]);
    // }

    // var elem = document.querySelector(".sidenav");
    // var instance = M.Sidenav.init(elem, {
    //     edge: "left",
    //     inDuration: 250
    // });

    // const activeImage = document.querySelector(".product-image .active");
    // const productImages = document.querySelectorAll(".image-list img");

    // function changeImage(e) {
    //   activeImage.src = e.target.src;
    // }
    // productImages.forEach(image => image.addEventListener("click", changeImage));
  // }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/account' component={Account}/>
            <Route path="/cart" component={Cart}/>
            {/* <Route path="/logout" component={Post}/> */}
            <Route path='/book/:id' component={BookDetails}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
