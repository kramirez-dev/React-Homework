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
import NotFound from './components/notFound'


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={prubaAPI}/>
      <Route exact path='/random' component={randomAPI}/>
      <Route exact path='/*' component={NotFound}/>
    </Switch>
  </Router>
  );
}

export default App;
