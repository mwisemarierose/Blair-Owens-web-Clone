import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { createUser, loginUser } from "../features/authenticationSlice";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import "./LoginForm.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, error, userCreated } = useSelector(
    (state) => state.auth
  );
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard/dash");
    }
  }, [isLoggedIn]);

  useEffect(
    (res) => {
      if (userCreated) {
        //  document.getElementById('login-popup')
        // navigate("/news");
      }
    },
    [userCreated]
  );

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(
      loginUser({
        email: userEmail,
        password: userPassword,
      })
    );
  };
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(
      createUser({
        username: username,
        email: email,
        password: password,
      })
    );
  };

  return (
    <div id="background">
      <div id="login-popup">
        <div
          id="popuphide"
          onClick={() => {
            document.getElementById("background").style.display = "none";
          }}
        >
          <RxCross1 />
        </div>
        <div id="logintitle">Log In</div>
        <div id="newbie">
          Don't have an account?{" "}
          <span
            onClick={() => {
              document.getElementById("login-popup").style.display = "none";
              document.getElementById("create-account-popup").style.display =
                "flex";
            }}
          >
            Create Your Account,
          </span>{" "}
          It takes less than a minute.
        </div>
        <form id="popup-login-form" className="popup-form">
          <p
            style={{
              color: "red",
            }}
          >
            {error}
          </p>
          <label>Email (use: agent)</label>
          <input
            type={"text"}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            id="popup-username"
          />
          <label>Password (use: agent)</label>
          <input
            type={"password"}
            id="popup-password"
            onChange={(event) => {
              setUserPassword(event.target.value);
            }}
          />
          <button
            onClick={handleLogin}
            className="popup-buttons"
            id="loginbutton"
          >
            LOGIN
          </button>
        </form>
        <div id="login-with-fb">
          <FaFacebook className="fb-google-icon" />
          <span>LOGIN WITH FACEBOOK</span>
        </div>
        <div id="login-with-google">
          <AiOutlineGoogle className="fb-google-icon" />
          <span>LOGIN WITH GOOGLE</span>
        </div>
        <div
          id="forget"
          onClick={() => {
            document.getElementById("login-popup").style.display = "none";
            document.getElementById("forgot-password-popup").style.display =
              "flex";
          }}
        >
          Lost Your Password?
        </div>
      </div>
      <div id="create-account-popup">
        <div
          id="popuphide"
          onClick={() => {
            document.getElementById("background").style.display = "none";
          }}
        >
          <RxCross1 />
        </div>
        <div id="logintitle">Create Account</div>
        <div id="newbie">
          It takes less than a minute If you already have an account{" "}
          <span
            onClick={() => {
              document.getElementById("create-account-popup").style.display =
                "none";
              document.getElementById("login-popup").style.display = "flex";
            }}
          >
            Login.
          </span>
          {userCreated&& <p style={{color:'#328EFB'}}>User Created</p>}

        </div>
        <form id="popup-newbie-form" className="popup-form">
          <label>
            Username<span>*</span>
          </label>
          <input
            type={"text"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            id="newbie-username"
          />
          <label>
            Email<span>*</span>
          </label>
          <input
            type={"text"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="newbie-email"
          />
          <div className="newbie-double">
            <div className="newbie-double-left">
              <label>First Name</label>
              <input type={"text"} id="newbie-fname" />
            </div>
            <div className="newbie-double-right">
              <label>Last Name</label>
              <input type={"text"} id="newbie-lname" />
            </div>
          </div>
          <label>Mobile</label>
          <input type={"tel"} id="newbie-telephone" />
          <div className="newbie-double">
            <div className="newbie-double-left">
              <label>
                Password<span>*</span>
              </label>
              <input
                type={"password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="newbie-password"
              />
            </div>
            <button
              id="create-account"
              onClick={handleRegister}
              className="popup-buttons"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
      <div id="forgot-password-popup">
        <div
          id="popuphide"
          onClick={() => {
            document.getElementById("background").style.display = "none";
          }}
        >
          <RxCross1 />
        </div>
        <div id="logintitle">Log In</div>
        <div id="newbie">
          Enter your username or Email and we'll send you the link you can use
          to recover your password.
        </div>
        <form id="forgot-password-form" className="popup-form">
          <label>Username or Email</label>
          <input type={"text"} id="popup-credential" />
          <button className="popup-buttons" id="new-password">
            GET NEW PASSWORD
          </button>
        </form>
      </div>
    </div>
  );
}
