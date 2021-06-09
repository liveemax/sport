import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {HeaderBrand} from "./HeaderBrand";
import {Link} from "react-router-dom";
import HeaderFilter from "./HeaderFilter";

const Header = () => {
    return (
        <header>
            <Navbar variant="dark" expand="lg">
                <Navbar.Brand>
                    <HeaderBrand />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link to="jogs">Jogs</Link>
                        <Link to="info">Info</Link>
                        <Link to="contact">Contacts Us</Link>
                    </Nav>
                </Navbar.Collapse>
                <div className={"headerFilter"}>
                <HeaderFilter />
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>
        </header>
    );
};

export default Header;