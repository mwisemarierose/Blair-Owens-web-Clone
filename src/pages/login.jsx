import React from "react";
import {RxCross1} from 'react-icons/rx';
import {AiOutlineGoogle} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
import './LoginForm.css';

export  default function LoginForm () {
    return(
        <div id='background'>
            <div id='login-popup'>
                <div id='popuphide' onClick={()=>{
                    document.getElementById("background").style.display = "none";
                }}>
                    <RxCross1/>
                </div>
                <div id='logintitle'>Log In</div>
                <div id='newbie'>Don't have an account? <span onClick={()=>{
                    document.getElementById("login-popup").style.display = "none";
                    document.getElementById("create-account-popup").style.display = "flex";
                }}>Create Your Account,</span> It takes less than a minute.</div>
                <form id='popup-login-form' className='popup-form'>
                    <label>Username (use: agent)</label>
                    <input type={"text"} id='popup-username' />
                    <label>Password (use: agent)</label>
                    <input type={"password"} id='popup-password' onChange={
                        () =>{
                            let password = document.getElementById("popup-password").value;
                            if (password) {                            } else {                            }
                        }
                    } />
                    <button className='popup-buttons' id='loginbutton'>LOGIN</button>
                </form>
                <div id='login-with-fb'>
                    <FaFacebook className='fb-google-icon'/>
                    <span>LOGIN WITH FACEBOOK</span>
                </div>
                <div id='login-with-google'>
                    <AiOutlineGoogle className='fb-google-icon'/>
                    <span>LOGIN WITH GOOGLE</span>
                </div>
                <div id='forget' onClick={()=>{
                    document.getElementById("login-popup").style.display = "none";
                    document.getElementById("forgot-password-popup").style.display = "flex";
                }}>
                    Lost Your Password?
                </div>
            </div>
            <div id='create-account-popup'>
                <div id='popuphide' onClick={()=>{
                    document.getElementById("background").style.display = "none";
                }}>
                    <RxCross1/>
                </div>
                <div id='logintitle'>Create Account</div>
                <div id='newbie'>It takes less than a minute If you already have an account <span onClick={()=>{
                    document.getElementById("create-account-popup").style.display = "none";
                    document.getElementById("login-popup").style.display = "flex";
                }}>Login.</span></div>
                <form id='popup-newbie-form' className='popup-form'>
                    <label>Username<span>*</span></label>
                    <input type={"text"} id='newbie-username' />
                    <label>Email<span>*</span></label>
                    <input type={"text"} id='newbie-email'/>
                    <div className='newbie-double'>
                        <div className='newbie-double-left'>
                            <label>First Name</label>
                            <input type={"text"} id='newbie-fname' />
                        </div>
                        <div className='newbie-double-right'>
                            <label>Last Name</label>
                            <input type={"text"} id='newbie-lname'/>
                        </div>
                    </div>
                    <label>Mobile</label>
                    <input type={"tel"} id='newbie-telephone'/>
                    <div className='newbie-double'>
                        <div className='newbie-double-left'>
                            <label>Password<span>*</span></label>
                            <input type={"text"} id='newbie-password' />
                        </div>
                        <div className='newbie-double-right'>
                            <label>Password again<span>*</span></label>
                            <input type={"text"} id='newbie-password-confirm'/>
                        </div>
                    </div>
                    <div id='acception'>
                        <input type={"checkbox"} id='accept-checkbox'  name='terms'/>
                        <label id='terms-label'>I accept the <span id='terms'>terms & Conditions</span></label>
                    </div>
                    <button id='create-account' className='popup-buttons'>Create Account</button>
                </form>
            </div>
            <div id='forgot-password-popup'>
                <div id='popuphide' onClick={()=>{
                    document.getElementById("background").style.display = "none";
                }}>
                    <RxCross1/>
                </div>
                <div id='logintitle'>Log In</div>
                <div id='newbie'>Enter your username or Email and we'll send you the link you can use to recover your password.</div>
                <form id='forgot-password-form' className='popup-form'>
                    <label>Username or Email</label>
                    <input type={"text"} id='popup-credential' />
                    <button className='popup-buttons' id='new-password'>GET NEW PASSWORD</button>
                </form>
            </div>
        </div>
    )
 }
 