import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Login from './Login.js';
import Home from './Home.js';

export default class App extends Component{
    
    render(){
        return(
            <Router>
                <div>
                  <nav>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/home">Home</Link></li>
                  </nav>
                  <hr/>
                  <Route exact path="/" component={Login}/>
                  <Route path="/home" component={Home}/>
                </div>
            </Router>
        );
    }
}
