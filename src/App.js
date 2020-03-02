import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import prubaAPI from './api-calls/prubaAPI';
import randomAPI from './api-calls/randomAPI';


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/categories' component={prubaAPI}/>
      <Route exact path='/random' component={randomAPI}/>
    </Switch>
  </Router>
  );
}

export default App;
