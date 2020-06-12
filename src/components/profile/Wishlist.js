import React, {Component} from 'react'
import BookList from '../books/BookList'
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

class Wishlist extends Component{
    componentDidMount() {
        
    }


    render(){
        const { books } = this.props;
        return(
            <div className="Dashboard">
                <Navbar/>
                <BookList books={books}/>    
                <Footer/>            
            </div>
        )
    }
}

export default Wishlist;