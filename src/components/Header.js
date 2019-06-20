import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/header.css'

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className="header">
                <Navbar.Brand href="/">Logo-App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">Home</Link>
                        <Link to="/createpost">Create Post</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
