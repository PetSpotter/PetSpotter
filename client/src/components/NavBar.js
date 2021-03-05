import React from 'react';
import { Link } from 'react-router-dom';

 
const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/addpet">Add a Pet</Link>
        </li>
      </ul>
    </nav>
  )
}


export default navbar;