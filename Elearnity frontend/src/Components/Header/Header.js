import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import { Button } from "@material-tailwind/react";

function Header() {
  return (
    <nav className='header-nav'>
        <div className='h-title'>ELearnity</div>
        <div className='links'>
          <Link to="/">
              <Button className='h-home' color="amber">Home</Button>
          </Link>
          <Link to="/categories">
            <Button className='h-categories' color="amber">Categories</Button>
          </Link>
          <Link to="/myprofile">
            <Button className='h-profile' color="amber">My Profile</Button>
          </Link>
          <Link to="/loginsignup">
            <Button className='h-login' color="amber">Login/Signup</Button>
          </Link>
        </div>
    </nav>
  );
}

export default Header