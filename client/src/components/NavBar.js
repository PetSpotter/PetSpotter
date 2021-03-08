import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';


const handleLogout = props => {
  logout().then(() => {
    props.setUser(null);
  });
};

const navbar = props => {

  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/'>Home</Link></li>
        {props.user ? (
          <>
            <li><Link to="/addpet">Add a Pet</Link></li>
            <li><Link to="/" onClick={ () => handleLogout(props)}>Logout</Link></li>
          </>
          ) : (
          <>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  )
}


export default navbar;