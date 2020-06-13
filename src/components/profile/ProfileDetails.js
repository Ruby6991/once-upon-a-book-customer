import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const axios = require("axios");

class ProfileDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            password:'',
            dateOfBirth:'',
            phoneNo:'',
            country:'',
            address:'',
            city:'',
            postalCode:'',
            billingCountry:'',
            billingAddress:'',
            billingCity:'',
            billingCode:''
        }
    }

    componentDidMount(){
        const that = this;
        console.log(localStorage);
        const token = 'Bearer '+ localStorage.token;
        const headersInfo = {
            Authorization:token
        }
        const data = {
            email:localStorage.email
        }
        axios.post("http://localhost:8080/GetUser",data,{
            headers:headersInfo
        }).then(function(res){
            console.log(res.data);
            const data = res.data;
            
            that.setState({
                firstName:data.firstName,
                lastName:data.lastName,
                // email:data.email,
                dateOfBirth:data.dateOfBirth,
                phoneNo:data.phoneNo,
                address:data.address
            })
        }).catch(function(error){
            console.log(error);
            if(error.response.status===401){
                localStorage.removeItem("token");
                localStorage.removeItem("email");
                localStorage.removeItem("name");
                that.setState({
                    redirectToHome:true
                })
            }
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onDateChange = (value, event) => {
        this.setState({
            dateOfBirth: value
        }, () => {
            console.log(this.state);
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const config = {
            headers:{
                Authorization:'Bearer '+ localStorage.token
            }
        }
        const data = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            dateOfBirth:this.state.dateOfBirth,
            phoneNo:this.state.phoneNo,
            address:this.state.address
        }
        console.log(data);

        axios.put("http://localhost:8080/UpdateUser/"+localStorage.email,data,config)
            .then(function(res){
                localStorage.setItem("name",(data.firstName));
                console.log("Profile updated successfully!");
                alert("Profile updated successfully!");
                window.location.reload();
            }).catch(function(error){
                console.log("Profile update un-successful!\nError : ",error.response);
                alert("Profile update un-successful!");
         })
    }

    render() {
        return (
            <div className="profile-details">
                <Navbar/>
                 <form onSubmit={this.handleSubmit}>
                    <h1>Update Account</h1>
                    <div className="field-sets">
                        <fieldset>
                            <legend><span class="number">1</span> Your basic info</legend>
                            <input type="text" id="firstName" name="first_name" placeholder="First Name*" value={this.state.firstName} onChange={this.handleChange}/>
                            <input type="text" id="lastName" name="last_name" placeholder="Last Name*" value={this.state.lastName} onChange={this.handleChange}/>
                            <label for="dob">Date of Birth</label>
                            <Calendar id="dob" onChange={this.onDateChange}/> <br/>
                            <input type="tel" id="phoneNo" name="phone_no" placeholder="Phone Number" value={this.state.phoneNo} onChange={this.handleChange}/>
                            <input type="text" id="address" name="address" placeholder="Address " value={this.state.address} onChange={this.handleChange}/>
                         </fieldset>
                    </div>
                    <button id="updateAcc" type="submit">Update</button>
                </form>
                <Footer/>
            </div>
        );
    }
}


export default ProfileDetails;