import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
//   Link
} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import NavBar from './NavBar';

export default class App extends Component{
    /*{
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/home">About</Link></li>
            <li><Link to="/nav">Navigation</Link></li>
            <li><Link to="/home">Reach Us</Link></li>
        </nav>
    }*/
    constructor(){
        super();
        this.state = {
            navPosition: 1
        }
        this.handleNavSelect = this.handleNavSelect.bind(this);
    }

    handleNavSelect(pos){
        this.setState ({ navPosition: pos })
    }
    render(){
        return(
            <Router>
                <div>
                    <NavBar title="TSK India Electronics" select={this.state.navPosition} onPositionChange={this.handleNavSelect}/>
                    <Route path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={Login}/>
                    <Route path="/products" component={Login}/>
                    <Route path="/contact" component={Login}/>
                </div>
            </Router>
        );
    }
}
