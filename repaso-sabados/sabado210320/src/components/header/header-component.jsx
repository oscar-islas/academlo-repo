import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import './header-styles.css';

export default function Header(){
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Academlo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/" activeClassName="active-page" exact>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeClassName="active-page">About</Nav.Link>
            <Nav.Link as={NavLink} to="/users" activeClassName="active-page">Users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}