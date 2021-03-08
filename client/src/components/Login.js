import React from "react";
import { login } from '../services/auth';

export default class Login extends React.Component {

  state = {
    username: '',
    password: '',
    message: ''
  }

  handleChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;

    login(username, password)
      .then(data => {
        if(data.message) {
          this.setState({
            message: data.message,
            username: '',
            password: ''
          })
        } else {
          this.props.setUser(data)
          this.props.history.push('/petdetails')
        }
      })
  }

  render() {
    return (
      <div>
        <div>Welcome to Login</div>

        <form onSubmit={this.handleSubmit} >

          <label htmlFor='username'>Username: </label>
            <input form
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
              id='username'
            />

          <label htmlFor='password'>Password: </label>
            <input form
              type='text'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
              id='password'
            />

          {this.state.message && (
            <alert variant='danger'>{this.state.message}</alert>)}
          <button type='submit'>Login</button>

          </form>
      </div>
    );
  }
}
