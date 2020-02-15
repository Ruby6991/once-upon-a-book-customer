import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import BookList from '../books/BookList'
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from 'react-redux'
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

class Dashboard extends Component{
    componentDidMount() {
        M.Tabs.init(this.Tabs);
    }


    render(){
        const { books } = this.props;
        return(
            <div className="Dashboard">
                <Navbar/>
                <div id="slider">
                    <figure>
                    <img src="https://i.pinimg.com/originals/0a/b6/f8/0ab6f8588ad64aa383c0b261b8a9ba71.png" alt/>
                    <img src="https://i.pinimg.com/originals/02/74/34/0274341e0d3ff5ff8f56c5f8d3288afb.png" alt/>
                    <img src="https://i.pinimg.com/originals/7d/2b/ed/7d2bed69019b8076410dec8bb2fed33a.png" alt/>
                    <img src="https://i.pinimg.com/originals/90/65/bb/9065bbf0bacfdcb65913f1d57e6df71c.png" alt/>
                    <img src="https://i.pinimg.com/originals/36/9e/bc/369ebcbb85c4aff98cda53fccad4f061.png" alt/>
                    </figure>
                </div>
                <div class="nav-content red lighten-1" id="bookCategories">
                    <ul ref={Tabs => {this.Tabs = Tabs;}}
                     class="tabs tabs-transparent center hide-on-med-and-down">
                        <li class="tab"><a href="#test-swipe-1">Fantasy</a></li>
                        <li class="tab"><a href="#test-swipe-2">Fiction</a></li>
                        <li class="tab"><NavLink to='/'>Romance</NavLink></li>
                        <li class="tab"><NavLink to='/'>Thriller</NavLink></li>
                        <li class="tab"><NavLink to='/'>Mystery</NavLink></li>
                        <li class="tab"><NavLink to='/'>Horror</NavLink></li>
                        <li class="tab"><NavLink to='/'>Classic</NavLink></li>
                        <li class="tab"><NavLink to='/'>Comics</NavLink></li>   
                        <li class="tab"><NavLink to='/'>Humor</NavLink></li>   
                        <li class="tab"><NavLink to='/'>Self-help</NavLink></li>   
                    </ul>
                    <ul ref={Tabs => {this.Tabs = Tabs;}}
                     class="tabs tabs-transparent center hide-on-med-and-up show-on-medium-and-down">
                        <li class="tab"><a href="#test-swipe-1">Fantasy</a></li>
                        <li class="tab"><NavLink to='/'>Fiction</NavLink></li>
                        <li class="tab"><NavLink to='/'>Romance</NavLink></li>
                        <li class="tab"><NavLink to='/'>Thriller</NavLink></li>
                        <li class="tab"><NavLink to='/'>Mystery</NavLink></li>
                    </ul>
                    <ul ref={Tabs => {this.Tabs = Tabs;}} 
                    class="tabs tabs-transparent center hide-on-med-and-up show-on-medium-and-down">
                        <li class="tab"><NavLink to='/'>Horror</NavLink></li>
                        <li class="tab"><NavLink to='/'>Classic</NavLink></li>
                        <li class="tab"><NavLink to='/'>Comics</NavLink></li>  
                        <li class="tab"><NavLink to='/'>Humor</NavLink></li>   
                        <li class="tab"><NavLink to='/'>Self-help</NavLink></li>    
                    </ul>
                </div>
                <form id="searchBar">
                    <div className="input-field ">
                        <label class="label-icon " for="search"><i class="material-icons">search</i></label>
                        <input id="search" type="search" required/>
                    </div> 
                </form>
                <BookList books={books}/>    
                <Footer/>            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        books:state.book.books
    }
}

export default connect(mapStateToProps)(Dashboard);