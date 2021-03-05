import React, { Component } from "react";
import "./App.css";
import NavBar from './components/NavBar';
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddPet from "./components/AddPet";
import PetDetails from "./components/PetDetails";
import { Switch, Route, Redirect } from "react-router-dom";


class App extends Component {

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
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/addpet" component={AddPet} />
            <Route exact path="/:id" component={PetDetails}/>
          </Switch>
      </div>
    );
  }
}
export default App;
