// import React from 'react';
// import { signup } from '../services/auth';
 
// export default class Signup extends React.Component {

//   state = {
//     username: '',
//     password: '',
//     message: ''
//   }

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     })
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     const { username, password } = this.state
//     signup( username, password)
//       .then(data => {
//         if(data.message){
//           this.setState({
//             message: data.message,
//             username: '',
//             password: ''
//           })
//         } else {
//           this.props.setUser(data);
//           this.props.history.push('/')
//         }
//       })
//   }

//   render() {
//     return (
//       <div>
//         <h2> Signup </h2>

//         <form onSubmit={this.handleSubmit} >

//             <label htmlFor='username'>Username: </label>
//                <input form
//                 type='text'
//                 name='username'
//                 value={this.state.username}
//                 onChange={this.handleChange}
//                 id='username'
//               />

//             <label htmlFor='password'>Password: </label>
//               <input form
//                 type='text'
//                 name='password'
//                 value={this.state.password}
//                 onChange={this.handleChange}
//                 id='password'
//               />

//             {this.state.message && (
//               <alert variant='danger'>{this.state.message}</alert>)}
//             <button type='submit'>Signup</button>

//         </form>
//       </div>
//     )
//   }
// }


import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Box from '@material-ui/core/Box';
// import Checkbox from '@material-ui/core/Checkbox';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
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

export default function Signup() {

  const classes = useStyles();

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
  
          <form className={classes.form} noValidate>
  
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  type='text'
                  // value={this.state.username}
                  // onChange={this.handleChange}
              />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                
                  variant="outlined"
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  name="first_name"
                  autoComplete="first_name"
                  type='text'
                  // value={this.state.first_name}
                  // onChange={this.handleChange}
                />
  
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  autoComplete="last_name"
                  type='text'
                  // value={this.state.last_name}
                  // onChange={this.handleChange}
                />
  
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoComplete="email"
                  type='text'
                  // value={this.state.first_name}
                  // onChange={this.handleChange}
                />
  
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  // value={this.state.password}
                  // onChange={this.handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  
}