import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
// import Dashboard from './components/dashboard/Dashboard';
// import M from "materialize-css/dist/js/materialize.min.js";

class App extends Component {
  // componentDidMount() {
  //   var elem = document.querySelector(".sidenav");
  //   var instance = M.Sidenav.init(elem, {
  //       edge: "left",
  //       inDuration: 250
  //   });
  // }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          {/* <Dashboard/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
