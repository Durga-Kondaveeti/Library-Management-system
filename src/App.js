
import './App.css';
import Main from './components/Main.js'
import React from 'react';
import logo from "./images/Logo.png"
import { Route ,Link, BrowserRouter, Routes } from 'react-router-dom';
import Login from './components/Login';
import Sign from './components/Sign';



function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <div className="taskBar">
          <center>
            <img src={logo} className="logo" alt="Logo"/>
          </center>
          

<div  className='taskBar-button'> 

<li><a href="/">Home</a></li>
        <li><a href="/">Books</a></li>
        <li><a href="/">Contact</a></li>
        <li><Link to="/Signup">Signup</Link></li>
        <li><Link to="/Login">Login</Link></li>

</div>

      </div >
      <Routes><Route path='/' element={<Main/>}></Route></Routes>
      <Routes><Route path='/Login' element={<Login/>}></Route></Routes>
      <Routes><Route path='/Signup' element={<Sign/>}></Route></Routes>
</BrowserRouter>

    
      </div>
 
  );
}

export default App;
