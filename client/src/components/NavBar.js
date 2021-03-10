import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { logout } from '../services/auth';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Add from '@material-ui/icons/Add';
import SvgIcon from '@material-ui/core/SvgIcon';

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
    textTransform: 'none',
  },
  button: {
    marginLeft: theme.spacing(2),
    margin: '0px 15px',
  },
  buttonLogout: {
    border: '.01em solid #fff',  
  },
  logoIcon: {
     marginRight: theme.spacing(2),
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

          <IconButton edge="start" className={classes.logoIcon} color="inherit">
            <Link to="/" className={classes.link}>
              <SvgIcon>
                <svg  viewBox="0 0 31.66 32">
                <path d="M15.94,16.35a9.25,9.25,0,0,0-2.8,7,13,13,0,0,0,2.62,7.46,3.86,3.86,0,0,0,3.43,1.13,2,2,0,0,0,1-.53,6.63,6.63,0,0,0,1.22-3.09,6,6,0,0,0,.13-.62,7.4,7.4,0,0,1,1.62-3.93c1.18-1.17,3.29-1.57,4.42-1.79l.35-.07A6.35,6.35,0,0,0,31,20.77a1.88,1.88,0,0,0,.5-.88,3.23,3.23,0,0,0-1.12-3.69C28.88,14.85,21.67,10.63,15.94,16.35Z"/>
                <path d="M10.47,18.18a3.17,3.17,0,0,0,.3-.34c1.52-2,.49-5.35-2.28-7.45C5.93,8.45,2.64,8.22,1,9.87a3.17,3.17,0,0,0-.3.34,4,4,0,0,0-.49,3.61A7.58,7.58,0,0,0,3,17.66C5.54,19.6,8.83,19.82,10.47,18.18Z"/>
                <path d="M2.52,22.85a2.35,2.35,0,0,0-.41.53c-1,1.68,0,4.06,2.35,5.43,2,1.19,4.27,1.18,5.48,0a2.6,2.6,0,0,0,.41-.53c1-1.68,0-4.06-2.35-5.43C6,21.63,3.73,21.64,2.52,22.85Z"/>
                <path d="M17.84,10.77c2-1.53,1.88-5.07-.18-7.79A7.58,7.58,0,0,0,13.82.21,4,4,0,0,0,10.21.7a3.17,3.17,0,0,0-.34.3c-1.65,1.64-1.42,4.93.52,7.49C12.49,11.27,15.83,12.29,17.84,10.77Z"/>
                <path d="M23.38,2.11a2.68,2.68,0,0,0-.53.41C21.64,3.73,21.63,6,22.82,8c1.37,2.31,3.75,3.34,5.43,2.35a2.6,2.6,0,0,0,.53-.41C30,8.73,30,6.48,28.81,4.46,27.44,2.15,25.05,1.12,23.38,2.11Z"/></svg>
              </SvgIcon>
            </Link>
          </IconButton>

          <Typography variant="h5" className={classes.title}>
          </Typography>
 
          <Button className={classes.button}><Link to='/' className={classes.link} >Home</Link></Button>
          {props.user ? (
            <>
              <Button endIcon={<Add style={{color: '#fff'}}/>} className={classes.button}><Link to="/addpet" className={classes.link}>Add a Pet</Link></Button>
              <Button variant="outlined" endIcon={<ExitToApp style={{color: '#fff'}}/>} className={classes.buttonLogout}><Link to="/" onClick={ () => handleLogout(props)} className={classes.link} >Logout</Link></Button>
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