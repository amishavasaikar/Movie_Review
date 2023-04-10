import React from 'react';
import  "./navBar.css";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>  
      <div className='menu-bar'>
        <ul>
          <li><a><Link to="/Home">Home</Link></a></li>
          <li className='active'><a><Link to="/">Movies</Link></a></li>
          {/* <li><a><Link to="/Genre">Genre</Link></a>
          <div className='sub-menu-1'>
            <ul>
              <li><a><Link to="/#">Action</Link></a></li>
              <li><a><Link to="/#">Comedy</Link></a></li>
              <li><a><Link to="/#">Thriller</Link></a></li>
            </ul>
          </div>
          </li>*/}
          <li><a><Link to="/login">Log In</Link></a></li>
          <li><a><Link to="/registration">Registration</Link></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;





/* 
<div className='topnav'>
      <ul >
        <li ><Link to="/registration">Registration</Link></li>
        <li ><Link to="/login">Log In</Link></li>
        <li ><Link to="/about">About</Link></li>
        <li ><Link to="/genre">Genre</Link>
          <div className='sub-menu'>
            <ul>
              <li><a href='#'>Action</a></li>
              <li><a href='#'>Comedy</a></li>
              <li><a href='#'>Thriller</a></li>
            </ul>   
          </div>
        </li>
        <li ><Link to="/">Movies</Link></li>
      </ul>
      </div>
*/ 