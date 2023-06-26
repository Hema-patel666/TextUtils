import React, { useState } from 'react';
import '../admin/LoginForm.css'
import {FaUserCircle} from "react-icons/fa";

 function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      email,
      password
    };
    
    // Send the payload to the backend using a POST API call
   const data = await fetch('http://localhost:4042/login', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(payload)
    });

    console.log(":::::",data);
    
  };

  return (    
    <div  style={{marginTop:"5%",marginLeft:"30%",width:"60%"}}>
 <div className="login-form">
      <FaUserCircle className="user-icon-page" size={40} />
      <h2 ><center>Login</center></h2>

      <form className='form' onSubmit={handleSubmit}>
        <div className="form-group ">
          <label className='lable' style={{marginRight:"8%"}}><b>Email :</b></label>
          <input 
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Enter email here'
            required
          />
        </div>
        <div className="form-group ">
          <label><b>Password :</b></label>
          <input 
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder='Enter password'
            required
          />
        </div>
       <center style={{marginTop:"25%"}}><button className="btn btn-info my-3" type="submit">Submit</button></center> 
      </form>
    </div>

    </div>  
   
   
  );
}
export default Login;