import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
  
const Response = () => { 
    const [message, setMessage] = useState("");
    const params = useParams();
    
    fetch("http://localhost:8082/response", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        param:params
      }),
    }).then(response => {
      return response.json()
    })
    .then(data => {
      if (data.length>0){
        setMessage("your information is "+ JSON.stringify(data));
      }
      else{
        setMessage("access denied, please recheck your username or password")
      }
      
    });
  return ( 
    <div> 
      <h1>{message}</h1> 
    </div> 
  ); 
}; 
  
export default Response; 