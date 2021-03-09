import React, { useState } from "react";
import {login} from "../services/auth";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Box from '@material-ui/core/Box';
// import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login (props) {

  const [state, setState] = useState({
    username: '',
    password: '',
    message: ''
  });

  const classes = useStyles();

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => {
      return {...prevState, [name]: value }
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { username, password } = state
    login(username, password)
      .then((data) => {
      if (data.message) {
        setState({
          message: data.message,
          username: "",
          password: ""
        });
      } else {
        props.setUser(data);
        props.history.push("/");
      }
    });
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>

          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Login up
          </Typography>

          <form onSubmit={handleSubmit} className={classes.form} noValidate>
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
                  type="text"
                  value={state.username}
                  onChange={(event) => handleChange(event)}
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
                  value={state.password}
                  onChange={(event) => handleChange(event)}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Login
            </Button>

            {state.message && ( <alert variant="danger">{state.message}</alert> )}

            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Still don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

// import React from "react";
// import { login } from '../services/auth';

// export default class Login extends React.Component {

//   state = {
//     username: '',
//     password: '',
//     message: ''
//   }

//   handleChange = e => {
//     const { name, value } = e.target

//     this.setState({
//       [name]: value
//     })
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     const { username, password } = this.state;

//     login(username, password)
//       .then(data => {
//         if(data.message) {
//           this.setState({
//             message: data.message,
//             username: '',
//             password: ''
//           })
//         } else {
//           this.props.setUser(data)
//           this.props.history.push('/petdetails')
//         }
//       })
//   }

//   render() {
//     return (
//       <div>
//         <div>Welcome to Login</div>

//         <form onSubmit={this.handleSubmit} >

//           <label htmlFor='username'>Username: </label>
//             <input form
//               type='text'
//               name='username'
//               value={this.state.username}
//               onChange={this.handleChange}
//               id='username'
//             />

//           <label htmlFor='password'>Password: </label>
//             <input form
//               type='text'
//               name='password'
//               value={this.state.password}
//               onChange={this.handleChange}
//               id='password'
//             />

//           {this.state.message && (
//             <alert variant='danger'>{this.state.message}</alert>)}
//           <button type='submit'>Login</button>
//           </form>
//       </div>
//     );
//   }
// }