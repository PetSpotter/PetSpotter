import React, { useState } from "react";
import {login} from "../services/auth";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Box from '@material-ui/core/Box';
// import Checkbox from '@material-ui/core/Checkbox';


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

          <Avatar className={classes.avatar} style={{backgroundColor: '#2a9d8f'}}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Login
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
                  type="text"
                  value={state.username}
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
              color="secondary"
              className={classes.submit}
              style={{backgroundColor: '#2a9d8f'}}
            >
              Login
            </Button>

            {state.message && ( <alert variant="danger" style={{color: 'red'}}>{state.message}</alert> )}

            <Grid container justify="flex-end">
              <p>Still don't have an account?</p>
              <a href="/signup"><p><span style={{padding: '0px 6px'}}>Sign Up</span></p></a>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};