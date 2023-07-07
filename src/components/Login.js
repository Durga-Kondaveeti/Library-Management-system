
import React, { useState } from 'react'
import '../style/login.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from './Auth';
import { BrowserRouter, Link,  Routes,Route } from 'react-router-dom';
import Sign from './Sign';


const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email,password);
    signInWithEmailAndPassword(auth, email, password).then((userCredential)=>console.log(userCredential))
    .catch((error)=>console.log(error))
  };

  return (
   
      <div className="container">

{/* Images */}
<div className='Imagelogin'/>


{/* login details */}
      <div className="form-container">
      <center>
      <h1>LOGIN</h1>
      </center>
      <form onSubmit={handleSubmit}>
        
        
        <div className='input-slots'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}/>
        </div>
        <div className='input-slots'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className='login-button'><h3>Login</h3></button>
      </form>
     
    </div>
   
    </div>
 
  );
}

export default Login