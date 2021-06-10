import React, {useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {HeaderBrand} from "./HeaderBrand";
import {Link} from "react-router-dom";
import HeaderFilter from "./HeaderFilter";
import * as path from "./../router/path";


const Header = () => {
    const [expanded,setExpanded]=useState()
    return (
        <header>
            <Navbar variant="dark" expand="lg" expanded={expanded}>
                <Navbar.Brand>
                    <HeaderBrand />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <HeaderBrand fill={"#62aa14"}/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>setExpanded(!expanded)}/>
                    <Nav>
                        <div onClick={()=>setExpanded(false)}><Link to={path.Jogs}>Jogs</Link></div>
                        <div onClick={()=>setExpanded(false)}><Link to={path.Info}>Info</Link></div>
                        <div onClick={()=>setExpanded(false)}><Link to={path.ContactUs}>Contacts Us</Link></div>
                    </Nav>
                </Navbar.Collapse>
                <div className={"headerFilter"}>
                <HeaderFilter />
                </div>
                <Navbar.Toggle onClick={()=>setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
            </Navbar>
        </header>
    );
};

export default Header;