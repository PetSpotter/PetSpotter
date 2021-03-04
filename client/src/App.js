import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Login from './components/Login';
import AddPet from './components/AddPet';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/login' component={Login}/>
      <Route path='/addpet' component={AddPet}/>
      </Switch>
      </Router>
        
      </div>
    );
  }
}
 
export default App;