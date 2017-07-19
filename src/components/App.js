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
                  <h1>TSK India</h1>
                  <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/home">About</Link></li>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/home">Reach Us</Link></li>
                  </nav>
                  <br/>
                  <hr/>
                  <Route exact path="/" component={Login}/>
                  <Route path="/home" component={Home}/>
                </div>
            </Router>
        );
    }
}
