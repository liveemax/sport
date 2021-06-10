import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {HeaderBrand} from "./HeaderBrand";
import {Link} from "react-router-dom";
import HeaderFilter from "./HeaderFilter";
import * as path from "./../router/path";


const Header = () => {
    return (
        <header>
            <Navbar variant="dark" expand="lg">
                <Navbar.Brand>
                    <HeaderBrand />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <HeaderBrand fill={"#62aa14"}/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav>
                        <Link to={path.Jogs}>Jogs</Link>
                        <Link to={path.Info}>Info</Link>
                        <Link to={path.ContactUs}>Contacts Us</Link>
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