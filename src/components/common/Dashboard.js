/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import BookList from '../books/BookList'
import BookDetails from '../books/BookDetails'
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import BookSummary from '../books/BookSummary';
const axios = require("axios")

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            category:'',
            books:[],
            view:true,
            searchResult:''
        }
        this.selectCategory = this.selectCategory.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        M.Tabs.init(this.Tabs);

        const that = this;

        axios.post("http://localhost:8080/GetBookList"
        ).then(function(res){
            console.log(res.data);
            that.setState({
                books:res.data
            })
        }).catch(function(error){
            console.log(error);
        })
    }

    selectCategory = (e) => {      
        this.setState({
            category:e.target.id
        }, () => {
            console.log(this.state);
        })
    }

    handleSearch = (e) => {
        const that=this;
        const token = 'Bearer '+ localStorage.token;
        const headersInfo = {
            Authorization:token
        }
        const data = {
            id: e.target.value
        }
        console.log(data);
        axios.post("http://localhost:8080/GetBook",data).then(function(res){
            console.log(res.data);
            that.setState({
                searchResult:res.data,
                view:false
            })
        }).catch(function(error){
            console.log(error.response);
        })
    }

    handleClose = (e) => {
        this.setState({
            view:true,
            searchResult:''
        })
    }


    render(){
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
                     class="tabs tabs-transparent center ">
                        <li class="tab"><a onClick={this.selectCategory} id="Art & Photography" href="#art">Art & Photography</a></li>
                        <li class="tab"><a onClick={this.selectCategory} id="Biography" href="#biography">Biography</a></li>
                        <li class="tab"><a onClick={this.selectCategory} id="Children's Books" href="#children">Children's Books</a></li>
                        <li class="tab"><a onClick={this.selectCategory} id="Crafts & Hobbies" href="#craft">Crafts & Hobbies</a></li>
                        <li class="tab"><a onClick={this.selectCategory} id="Crime & Thriller" href="#crime">Crime & Thriller</a></li>
                        <li class="tab"><a onClick={this.selectCategory} id="Fiction" href="#fiction">Fiction</a></li>
                    </ul>
                    <ul ref={Tabs => {this.Tabs = Tabs;}} 
                    class="tabs tabs-transparent center ">
                        <li class="tab"><a onClick={this.selectCategory} id="Food & Drink" href="#food">Food & Drink</a></li>
                        <li class="tab"><a onClick={this.selectCategory} id="Graphic Novels, Anime & Manga" href="#comics">Graphic Novels, Anime & Manga</a></li>   
                        <li class="tab"><a onClick={this.selectCategory} id="History & Archaeology" href="#history">History & Archaeology</a></li>   
                        <li class="tab"><a onClick={this.selectCategory} id="Mind, Body & Spirit" href="#mind">Mind, Body & Spirit</a></li>
                        <li class="tab"><a onClick={this.selectCategory} id="Science Fiction, Fantasy & Horror" href="#fantasy">Science Fiction, Fantasy & Horror</a></li>    
                    </ul>
                </div>
                <form id="searchBar">
                    <div className="input-field ">
                        <label class="label-icon " for="search"><i class="material-icons">search</i></label>
                        <input id="search" type="search" required onChange={this.handleSearch}/>
                        <i class="material-icons" onClick={this.handleClose}>close</i>
                    </div> 
                </form>
                    {this.state.view?(
                        <BookList books={this.state.books} category={this.state.category} />
                    ):(
                        <div id="test-swipe-1" class="list">
                            <BookSummary book={this.state.searchResult} key={this.state.searchResult.id} /> 
                        </div>
                        
                    )}
                <Footer/>            
            </div>
        )
    }
}



export default Dashboard;