import React, {useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {HeaderSvgBrand} from "./HeaderSvgBrand";
import {Link} from "react-router-dom";
import HeaderSvgFilter from "./HeaderSvgFilter";
import * as path from "./../router/path";
import HeaderSearch from "./HeaderSearch";


const Header = () => {
    const [expanded, setExpanded] = useState(false)
    const [filterOpen, setFilterOpen] = useState(false)
    console.log(filterOpen)
    return (
        <header>
            <Navbar variant="dark" expand="lg" expanded={expanded}>
                <Navbar.Brand>
                    <Link to={path.Login}>
                        <HeaderSvgBrand/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <HeaderSvgBrand fill={"#62aa14"}/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}/>
                    <Nav>
                        <div onClick={() => setExpanded(false)}><Link to={path.Jogs}>Jogs</Link></div>
                        <div onClick={() => setExpanded(false)}><Link to={path.Info}>Info</Link></div>
                        <div onClick={() => setExpanded(false)}><Link to={path.ContactUs}>Contacts Us</Link></div>
                    </Nav>
                </Navbar.Collapse>
                <div onClick={() => setFilterOpen(!filterOpen)} className={"headerFilter"}>
                    <HeaderSvgFilter filterOpen={filterOpen}/>
                </div>
                <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav"/>
            </Navbar>
            {filterOpen ? <HeaderSearch/> : null}
        </header>
    );
};

export default Header;