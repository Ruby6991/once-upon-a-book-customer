import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Calendar from 'react-calendar'
import M from "materialize-css";
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
            address:'',
            currentPsw:'',
            newPsw:'',
            orders:''
        }
        this.updatePassword = this.updatePassword.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        const modal = document.querySelectorAll('.modal');
        M.Modal.init(modal, {});

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

        
        axios.post("http://localhost:8080/GetOrderListByUser",data,{
            headers:headersInfo
        }).then(function(res){
            that.setState({
                orders:res.data
            })
            console.log(res.data);
        }).catch(function(error){
            console.log(error);
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

    updatePassword = (e) => {
        e.preventDefault();
        console.log(this.state);

        if(this.state.currentPsw==='' || this.state.newPsw==='' ){
            alert("Please fill in the required fields");
            return;
        }

        const config = {
            headers:{
                Authorization:'Bearer '+ localStorage.token
            }
        }

        const formData = new FormData();
            formData.append('currentPsw', this.state.currentPsw);
            formData.append('newPsw', this.state.newPsw);

        axios.put("http://localhost:8080/UpdatePassword/"+localStorage.email,formData,config)
            .then(function(res){
                console.log("Password updated successfully!");
                alert("Password updated successfully!");
                window.location.reload();
            }).catch(function(error){
                console.log("Password update un-successful!\nError : ",error.response);
                alert("Password update un-successful!");
         })
    }

    handleDelete = (e) => {
        e.preventDefault();
        let pendingOrders = false; 
        this.state.orders.map(order => 
            {
                if(order.status==="Confirmed"){
                    pendingOrders=true;
                }
            })

        if(pendingOrders){
            alert("Sorry. You Cannot Delete Your Account While You have Ongoing Orders");
            return;
        }
            
        const config = {
            headers:{
                Authorization:'Bearer '+ localStorage.token
            }
        }
        if (window.confirm("Are you sure you want to delete your account?")) {
            axios.delete("http://localhost:8080/DeleteUser/"+localStorage.email,config)
            .then(function(res){
                console.log("Profile deleted successfully!");
                alert("Profile deleted successfully!");
                window.location.reload();
            }).catch(function(error){
                console.log("Profile delete un-successful!\nError : ",error.response);
                alert("Profile delete un-successful!");
        })
          } else {
            alert("Account deletion cancelled");
          }          
        
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
                    <button id="updateAcc" onClick={this.handleDelete}>Delete Account</button>
                    {/* <!-- Modal Trigger --> */}
                    <button id="updateAcc" data-target="modal1"  class="modal-trigger update-btn" >Update Password</button>
                </form>

                {/* <!-- Modal1 Structure --> */}
                <div id="modal1" class="modal">
                    <div class="modal-content">
                        <h4>Update Password</h4>
                        <form id="passWordForm">
                            <label class="active" for="currentPsw">Current Password</label>
                            <input type="password" placeholder="Password" id="currentPsw" onChange={this.handleChange} />
                            <label class="active" for="newPsw">New Password</label>
                            <input type="password" placeholder="Password" id="newPsw" onChange={this.handleChange} />
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button style={{marginRight:30+'px'}} class="modal-close waves-effect waves-green btn-flat teal lighten-3" onClick={this.updatePassword} >Update</button>
                        <button class="modal-close waves-effect waves-green btn-flat teal lighten-3">Cancel</button>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


export default ProfileDetails;