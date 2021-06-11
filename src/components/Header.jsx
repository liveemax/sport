import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {HeaderSvgBrand} from "./HeaderSvgBrand";
import {Link, Redirect} from "react-router-dom";
import HeaderSvgFilter from "./HeaderSvgFilter";
import * as path from "./../router/path";
import HeaderSearch from "./HeaderSearch";
import {useDispatch, useSelector} from "react-redux";
import {root, selectExpanded, selectFilterOpen} from "../state/reducers/rootReducer";
import * as pathConst from "../router/path";


const Header = () => {
    const {expanded,filterOpen,isAuth}=useSelector(root)
    const dispatch=useDispatch()
    console.log(isAuth)
    return (
        <header>
            <Navbar variant="dark" expand="lg" expanded={expanded}>
                    <Navbar.Brand>
                    <Link to={path.Login}>
                        <HeaderSvgBrand/>
                    </Link>
                </Navbar.Brand>
                {isAuth?
                    <>
                <Navbar.Collapse id="basic-navbar-nav">
                    <HeaderSvgBrand fill={"#62aa14"}/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() =>  dispatch(selectExpanded(!expanded))}/>
                    <Nav>
                        <div onClick={() => dispatch(selectExpanded(false))}><Link to={path.Jogs}>Jogs</Link></div>
                        <div onClick={() => dispatch(selectExpanded(false))}><Link to={path.Info}>Info</Link></div>
                        <div onClick={() => dispatch(selectExpanded(false))}><Link to={path.ContactUs}>Contacts Us</Link></div>
                    </Nav>
                </Navbar.Collapse>
                <div onClick={() => dispatch(selectFilterOpen(!filterOpen))} className={"headerFilter"}>
                    <HeaderSvgFilter filterOpen={filterOpen}/>
                </div>
                <Navbar.Toggle onClick={() => dispatch(selectExpanded(!expanded))} aria-controls="basic-navbar-nav"/>
                    </>
                    :null
                }
            </Navbar>
            {filterOpen&&isAuth ? <HeaderSearch/> : null}
            {isAuth?null:<Redirect to={pathConst.Login}/>}
        </header>
    );
};

export default Header;