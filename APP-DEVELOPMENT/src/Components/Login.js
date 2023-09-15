import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./Login.css"
function Login() {
  const nav=useNavigate();
  const[username,setUsername]=useState('');
  const[password,setpassword]=useState('');
  const[user,setUser]=useState('');
 
  const authenticate=(e)=>{
    e.preventDefault();
  
}
  return (
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div className="header">
      <div id="me1"><h1>CamCraft</h1></div>
        <p>Enter Credentials For Login</p>
      </div>
   
      <form>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
        </div>
        <input onClick={authenticate} className="signup-btn" type="submit" value="LOGIN" />
      </form>
    <Link to="/register">  <p>No Account? Create One!</p></Link>
      
    </div>
  </div>
  </div>
  )
}

export default Login;