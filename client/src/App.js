import React, { Component } from "react";
import "./App.css";
import NavBar from './components/NavBar';
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddPet from "./components/AddPet";
import PetDetails from "./components/PetDetails";
import { Switch, Route, Redirect } from "react-router-dom";


export default class App extends React.Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} setUser={this.setUser} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />

            <Route exact path="/addpet"
              render={props => {
                if(this.state.user) return <AddPet {...props} />
                else return <Redirect to='/signup' />
              }}
            />

            <Route exact path="/:id"
              render={props => {
                if(this.state.user) return <AddPet {...props} />
                else return <Redirect to='/signup' />
              }}
            />
            
            <Route exact path="/signup"
              rendeer={props => <Signup setUser={this.setUser} {...props} />}
            />
            
          </Switch>
      </div>
    );
  }
}
 
