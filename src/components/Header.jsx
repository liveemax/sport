import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { HeaderSvgBrand } from "./Svg/HeaderSvgBrand";
import { Link } from "react-router-dom";
import HeaderSvgFilter from "./Svg/HeaderSvgFilter";
import HeaderSearch from "./HeaderSearch";
import { useDispatch, useSelector } from "react-redux";
import {
  root,
  selectExpanded,
  selectFilterOpen,
} from "../state/reducers/rootReducer";
import {
  jogs,
  selectDataFrom,
  selectDataTo,
  selectJogsResults,
} from "../state/reducers/jogsFilterReducer";
import { useLocation } from "react-router";
import { sport } from "../module/module";
import HeaderLink from "./HeaderLink";
import { selectJogsAddIsOpen } from "../state/reducers/jogsAddReducer";

const Header = () => {
  const location = useLocation();
  const { expanded, filterOpen, isAuth } = useSelector(root);
  const { allPages } = useSelector(jogs);
  const dispatch = useDispatch();
  return (
    <header>
      <Navbar variant="dark" expand="lg" expanded={expanded}>
        <Navbar.Brand
          onClick={() => {
            sport.reduxReset(dispatch);
          }}
        >
          <Link to={sport.path.login}>
            <HeaderSvgBrand />
          </Link>
        </Navbar.Brand>
        {isAuth ? (
          <>
            <Navbar.Collapse id="basic-navbar-nav">
              <HeaderSvgBrand fill={"#62aa14"} />
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={() => dispatch(selectExpanded(!expanded))}
              />
              <Nav>
                <HeaderLink path={sport.path.jogs}>Jogs</HeaderLink>
                <HeaderLink path={sport.path.info}>Info</HeaderLink>
                <HeaderLink path={sport.path.contactUs}>Contacts Us</HeaderLink>
              </Nav>
            </Navbar.Collapse>
            {location.pathname === sport.path.jogs && allPages !== 0 ? (
              <div
                onClick={() => {
                  dispatch(selectFilterOpen(!filterOpen));
                  dispatch(
                    selectJogsResults(
                      JSON.parse(localStorage.getItem(sport.jogStorage))
                    )
                  );
                  dispatch(selectJogsAddIsOpen(false));
                  dispatch(selectDataFrom(""));
                  dispatch(selectDataTo(""));
                }}
                className={"headerFilter"}
              >
                <HeaderSvgFilter filterOpen={filterOpen} />
              </div>
            ) : null}
            <Navbar.Toggle
              onClick={() => dispatch(selectExpanded(!expanded))}
              aria-controls="basic-navbar-nav"
            />
          </>
        ) : null}
      </Navbar>
      {filterOpen ? <HeaderSearch /> : null}
    </header>
  );
};

export default Header;
