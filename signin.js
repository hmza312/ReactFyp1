import React, { useState } from 'react';
import './signin.css';
import Home from './home.jpg'
import Main1 from './Component/Asan'
class Login extends React.Component{
    render(){
        return(

        
<div>
<Main1/>
<div class="container1">
    
    <div class="booking-content">
        <div class="booking-image">
            <img class="booking-img" src={Home} alt="Booking Image"/>
        </div>
        <div class="booking-form">
            <form id="booking-form" onsubmit="return checkForm()">
                <h2>SignIn</h2>
                <div class="form-group form-input">
                    <input type="text" name="name" id="name" value="" />
                    <label for="name" class="form-label">User name</label>
                </div>
                <div class="form-group form-input">
                    <input type="password" name="pass" id="pass" value="" />
                    <label for="pass" class="form-label">Password</label>
                </div>
                <div class="form-submit">
                    <input type="submit" value="SIGN IN" class="submit" id="submit" name="SIGNIN" />
                </div>
            </form>
        </div>
    </div>
</div>


</div>
);}}
export default Login;
