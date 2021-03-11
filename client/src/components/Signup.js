import React from 'react';
import { signup } from '../services/auth';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup (props) {

  const [state, setState] = useState({
      username: '',
      password: '',
      message: '',
      first_name: '',
      last_name: '',
      email: '',
    });

  const classes = useStyles();

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return {...prevState, [name]: value}
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const { username, password, first_name, last_name, email } = state
    signup( username, password, first_name, last_name, email)
      .then(data => {
        if(data.message){
          setState({
            message: data.message,
            username: '',
            password: '',
            first_name: '',
            last_name: '',
          })
        } else {
          props.setUser(data);
          props.history.push('/')
        }
      })
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar} style={{backgroundColor: '#264653'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <form onSubmit={handleSubmit} className={classes.form} noValidate>

            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  type='text'
                  value={state.username}
                  onChange={(event) => handleChange(event)}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="first_name"
                  name="first_name"
                  variant="standard"
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  type='text'
                  value={state.first_name}
                  onChange={(event) => handleChange(event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  autoComplete="last_name"
                  type='text'
                  value={state.last_name}
                  onChange={(event) => handleChange(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type='text'
                  value={state.email}
                  onChange={(event) => handleChange(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={state.password}
                  onChange={(event) => handleChange(event)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{backgroundColor: '#264653'}}
            >
              Sign Up
            </Button>
            
            {state.message && ( <alert variant="danger" style={{color: 'red'}}>{state.message}</alert> )}
   
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};