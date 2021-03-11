import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import axios from 'axios'

// axios.get('/api/auth/loggedin')
//   .then(response => {
    const user = null
    // response.data
    ReactDOM.render(
      <Router>
        <App user={user} />
      </Router>,
      document.getElementById('root')
    );
  // })
  // .catch(err => console.log(err))

reportWebVitals();
