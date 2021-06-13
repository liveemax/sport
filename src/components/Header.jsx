import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {HeaderSvgBrand} from "./HeaderSvgBrand";
import {Link} from "react-router-dom";
import HeaderSvgFilter from "./HeaderSvgFilter";
import * as pathConstant from "./../router/path";
import HeaderSearch from "./HeaderSearch";
import {useDispatch, useSelector} from "react-redux";
import {root, selectExpanded, selectFilterOpen, selectIsAuth} from "../state/reducers/rootReducer";
import {
    jogs,
    selectAllPages, selectDataFrom,
    selectDataTo,
    selectJogsResults,
    selectStartPage
} from "../state/reducers/jogsFilterReducer";
import {useLocation} from "react-router";
import {jogStorage} from "../sportsModule/stateReuse"
import {selectJogsAddIsOpen} from "../state/reducers/jogsAddReducer";



const Header = () => {
    const location=useLocation()
    const {expanded, filterOpen, isAuth} = useSelector(root)
    const {allPages} = useSelector(jogs)
    const dispatch = useDispatch()
    return (
        <header>
            <Navbar variant="dark" expand="lg" expanded={expanded}>
                <Navbar.Brand onClick={() => {
                    dispatch(selectIsAuth(false))
                    dispatch(selectStartPage(0))
                    dispatch(selectJogsResults([]))
                    dispatch(selectAllPages(0))
                    dispatch(selectExpanded(false))
                    dispatch(selectFilterOpen(false))
                    dispatch(selectJogsAddIsOpen(false))
                    dispatch(selectDataTo(""))
                    dispatch(selectDataFrom(""))
                }}>
                    <Link to={pathConstant.Login}>
                        <HeaderSvgBrand/>
                    </Link>
                </Navbar.Brand>
                {isAuth ?
                    <>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <HeaderSvgBrand fill={"#62aa14"}/>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"
                                           onClick={() => dispatch(selectExpanded(!expanded))}/>
                            <Nav>
                                <div onClick={() => dispatch(selectExpanded(false))}><Link to={pathConstant.Jogs}>Jogs</Link>
                                </div>
                                <div onClick={() => dispatch(selectExpanded(false))}><Link to={pathConstant.Info}>Info</Link>
                                </div>
                                <div onClick={() => dispatch(selectExpanded(false))}><Link to={pathConstant.ContactUs}>Contacts
                                    Us</Link></div>
                            </Nav>
                        </Navbar.Collapse>
                        {location.pathname===pathConstant.Jogs&&allPages!==0?
                            <div onClick={() => {
                                dispatch(selectFilterOpen(!filterOpen))
                                dispatch(selectJogsResults(JSON.parse(localStorage.getItem(jogStorage))))
                                dispatch(selectDataFrom(""))
                                dispatch(selectDataTo(""))
                            }} className={"headerFilter"}>
                                <HeaderSvgFilter filterOpen={filterOpen}/>
                            </div>:null}
                        <Navbar.Toggle onClick={() => dispatch(selectExpanded(!expanded))}
                                       aria-controls="basic-navbar-nav"/>
                    </> : null
                }
            </Navbar>
            {filterOpen ? <HeaderSearch/> : null}
        </header>
    );
};

export default Header;