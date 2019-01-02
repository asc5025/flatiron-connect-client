import React from 'react';
import { Link } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';


const NavBar = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">Home</Link>
      <div className="right menu">
        <Link to="/messages" className="item">Messages</Link>
        <Link to="/profile" className="item">Profile</Link>
        <LogIn />
      </div>
    </div>
  )
}


export default NavBar;
