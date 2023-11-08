import React, { useState,useEffect } from "react";
import { Password } from 'primereact/password';
import "./App.css";
import {useNavigate} from 'react-router-dom';


function Login() {

  const [message, setMessage] = useState("");
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");
  const navigate = useNavigate();


  function login(){
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: inputUser,
        password: inputPass
      }),
    }).then(response => {
      return response.json()
    })
    .then(data => {
        let userId= data[0].id;
        navigate('/response/:'+userId);
    });
  } 

  return (
    <div className="app">
     
				<div> 
					<label htmlFor="username">Username</label>
					<input type="text" name="username" id="username" onChange={(e) => setInputUser(e.target.value)}/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
					<input type="text" name="passw" id="passw" onChange={(e) => setInputPass(e.target.value)}/> 
				</div>  
				<button type="submit" onClick={login}>Login</button>
        <div>{message}</div>
		
    </div>
  );
}

export default Login;