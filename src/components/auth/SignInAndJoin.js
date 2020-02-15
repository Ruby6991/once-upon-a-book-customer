import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";

class SignInAndJoin extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullName:'',
            email:'',
            phoneNo:'',
            address:'',
            password:'',
            redirectToHome:false,
            redirectToRegister:false
        }
    }

    componentDidMount(){
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
        }); 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmitSignIn = (e) => {
        e.preventDefault();
        console.log(this.state);
        
        const login = {
            email:this.state.email,
            password:this.state.password
        }

        const that = this;
        axios.post("http://localhost:8080/authenticate",login)
        .then(function(res){
            const data = res.data;
            console.log(data)
            localStorage.setItem("token",data.jwttoken);
            localStorage.setItem("email",that.state.email);
            localStorage.setItem("name",(data.user.fullname));
            that.setState({
                redirectToHome:true
            })

        })
    }

    handleSubmitSignUp = (e) => {
        e.preventDefault();
        console.log(this.state);
        const login = {
            email:this.state.email,
            password:this.state.password
        };

        const user = {
            fullName: this.state.fullName,
            email:this.state.email,
            phoneNo:this.state.phoneNo,
            address:this.state.address,
            password:this.state.password
        }

        const that = this;
        axios.post("http://localhost:8080/Register",user)
        .then(function(res){
            alert("Registered Successfully!");
            console.log(login);
            axios.post("http://localhost:8080/authenticate",login)
            .then(function(res){
                localStorage.setItem("token",res.data.jwttoken);
                localStorage.setItem("email",that.state.email);
                localStorage.setItem("name",(res.data.user.fullname));
                that.setState({
                    redirectToHome:true
                })
            });
        })
    }

    render() {
        return (
            <div className="outer-container">
                {
                   this.state.redirectToHome?(
                       <Redirect to="/dashboard"/>
                   ):("")
               }
                <div class="container-starter" id="container">
                    <div class="form-container sign-up-container">
                        <form onSubmit={this.handleSubmitSignUp} >
                            <h1>Create Account</h1>
                            <input type="text" placeholder="Full Name" id="fullName" onChange={this.handleChange}/>
                            <input type="text" placeholder="Phone Number" id="phoneNo" onChange={this.handleChange}/>
                            <input type="text" placeholder="Address" id="address" onChange={this.handleChange}/>
                            <input type="email" placeholder="Email" id="email" onChange={this.handleChange}/>
                            <input type="password" placeholder="Password" id="password" onChange={this.handleChange} />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form onSubmit={this.handleSubmitSignIn} >
                            <h1>Sign in</h1>
                            <input type="email" placeholder="Email" id="email" onChange={this.handleChange} />
                            <input type="password" placeholder="Password" id="password" onChange={this.handleChange}/>
                            <a href="#">Forgot your password?</a>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To stay connected with us please login with your personal info</p>
                                <button class="ghost" id="signIn">Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start your journey with us</p>
                                <button class="ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignInAndJoin;