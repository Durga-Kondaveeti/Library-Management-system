
import '../App.css';
import Main from './Main'
import React, { useContext } from 'react';
import logo from "../images/Logo.png"
import { Route ,Link, BrowserRouter, Routes } from 'react-router-dom';
import Login from './Login';
import Addcart from './Addcart';
import { auth } from './Auth';

const Navbar = () => {
  
  return (
    <div>
   
      <div>
      <BrowserRouter>
      <div className="taskBar">
          <center>
            <img src={logo} className="logo" alt="Logo"/>
          </center>
<div  className='taskBar-button'> 
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Addcart</Link></li>
        <li><button onClick={()=>auth.signOut()}>signout</button></li>
</div>
      </div >
      <Routes><Route path='/' element={<Main/>}></Route></Routes>
      <Routes><Route path='/cart' element={<Addcart/>}></Route></Routes>
   
      </BrowserRouter>
</div>





 </div>
  )
}

export default Navbar
