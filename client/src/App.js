import React, { Component } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddPet from "./components/AddPet";
import PetDetails from "./components/PetDetails";
import { Switch, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/:id" component={PetDetails} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/addpet" component={AddPet} />
          </Switch>
      </div>
    );
  }
}
export default App;
