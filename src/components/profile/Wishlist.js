import React, {Component} from 'react'
import BookList from '../books/BookList'
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
const axios = require("axios")

class Wishlist extends Component{
    constructor(props){
        super(props);
        this.state={
            books:[]
        }
    }

    componentDidMount() {
        const that = this;
        const token = 'Bearer '+ localStorage.token;
        const headersInfo = {
            Authorization:token
        }

        const data = {
            email:localStorage.email
        }

        axios.post("http://localhost:8080/getWishList",data,{
            headers:headersInfo
        }).then(function(res){
            console.log(res.data);
            that.setState({
                books:res.data
            })
        }).catch(function(error){
            console.log(error);
        })
    }


    render(){
        return(
            <div className="Dashboard">
                <Navbar/>
                <BookList books={this.state.books}/>    
                <Footer/>            
            </div>
        )
    }
}

export default Wishlist;