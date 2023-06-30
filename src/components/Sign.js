import React, { useState } from 'react'
import '../style/sign.css'

const Login = () => {
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
    </div>
    </div>
 
  );
}

export default Login
