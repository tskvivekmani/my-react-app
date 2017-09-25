import React from 'react';
import {Nav, Navbar, NavItem } from 'react-bootstrap';
//import {Link} from 'react-router-dom';

/*Works but the selected tab is not activating
{
    <Nav bsStyle="tabs" justified activeKey={select} onSelect={ (e) => {onPositionChange(e)}}>
        <li><Link to="/home"><NavItem eventKey={1} href="/home">Home</NavItem></Link></li>
        <li><Link to="/about"><NavItem eventKey={2} href="/about">About Us</NavItem></Link></li>
        <li><Link to="/products"><NavItem eventKey={3} href="/products">Our Products</NavItem></Link></li>
        <li><Link to="/contact"><NavItem eventKey={4} href="/contact">Contact Us</NavItem></Link></li>
    </Nav>
}
*/
const NavBar = ({title, select, onPositionChange}) => {
  return (
    <Navbar inverse>
        <h1>{title}</h1>
        <Navbar.Header>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav bsStyle="tabs" justified activeKey={select} onSelect={ (e) => {onPositionChange(e)}}>
                    <NavItem eventKey={1} href="/home">Home</NavItem>
                    <NavItem eventKey={2} href="/about">About Us</NavItem>
                    <NavItem eventKey={3} href="/products">Our Products</NavItem>
                    <NavItem eventKey={4} href="/contact">Contact Us</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar.Header>
    
    </Navbar>
  )
};

export default NavBar;