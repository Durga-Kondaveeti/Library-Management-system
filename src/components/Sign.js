import React, { useState } from 'react'
import '../style/sign.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Auth';

const Sign = ({redirectButton}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>console.log(userCredential))
    .catch((error)=>console.log(error))

  };

  return (
   
      <div className="container">
{/* Images */}
<div className='Imagelogin'/>
{/* login details */}

      <div className="form-container">
      <center>
      <h1>SIGN UP</h1>
      </center>
      <form onSubmit={handleSubmit}>
        <div className='input-slots'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className='input-slots'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
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
        <button type="submit"  className='signup-button'>Sign Up</button>
      </form>
      <div className='redirectPagesButton'>
      <h3>Already have account  <button onClick={()=>redirectButton(1)}>Login</button></h3>
      </div> 
    </div>
    </div>
 
  );
}

export default Sign