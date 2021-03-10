import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { logout } from '../services/auth';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    margin: '0px 10px',
    textTransform: 'capitalize',
  },
  button: {
    margin: '0px 10px',
  }
}));


const handleLogout = props => {
  logout().then(() => {
    props.setUser(null);
  });
};

export default function NavBar (props) {

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#2a9d8f'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Pet Spotter
          </Typography>
 
          <Button className={classes.button}><Link to='/' className={classes.link} >Home</Link></Button>
          {props.user ? (
            <>
              <Button className={classes.button}><Link to="/addpet" className={classes.link}>Add a Pet</Link></Button>
              <Button className={classes.button}><Link to="/" onClick={ () => handleLogout(props)} className={classes.link} >Logout</Link></Button>
            </>
          ) : (
            <>
              <Button className={classes.button}><Link to="/signup" className={classes.link}>Signup</Link></Button>
              <Button className={classes.button}><Link to="/login" className={classes.link}>Login</Link></Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

 {/* <nav className="nav-style">
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
    </nav> */}