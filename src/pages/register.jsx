import React, { useState } from "react";
import Card from '../components/Card'
import "./LoginForm.css";
import { BsCursor } from "react-icons/bs";
import NavBar from "../Components/NavBar";

export default function Register ({setOpenModal}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    
    
    <Card>
        <button
        onClick={(e) => {
            e.preventDefault();
            window.location.href='/';
            }}
          >
            X
          </button>
    
      <h1 className="title">Create An Account</h1>
      <p className="subtitle">
      It takes less than a minute. If you already have an account <a href="/login"> login</a>
      </p>
      <form >
               
        <div className="inputs_container">
        <label for="email">Username</label>
      <input type="text" placeholder="Enter Username" name="email" required></input>
          <label for="email">Email</label>
      <input type="text" placeholder="Enter Email" name="email" required></input>
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required></input>
        </div>
       <input type="submit" value="REGISTER" className="login_button" />
      </form>
      
      <div className="icons">
      </div>
    </Card>
  );
}
