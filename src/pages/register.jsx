import React, { useState } from "react";
import "./LoginForm.css";
import { BsCursor } from "react-icons/bs";


export default function Register ({setOpenModal}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    
    
    <div className="card">
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
      <label for="psw">Password</label>
      <input type="password" placeholder="Enter Password" name="psw" required></input>
        </div>
       <input type="submit" value="REGISTER" className="login_button" />
      </form>
      
      <div className="icons">
      </div>
    </div>
  );
}
