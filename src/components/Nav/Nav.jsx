import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <div className="logo"></div>
            <div className="nav-links">
                <NavLink to="/" activeClassName="selected">
                    Home
                </NavLink>
                <NavLink to="/about" activeClassName="selected">
                    About
                </NavLink>
                <NavLink to="/issueboard" activeClassName="selected">
                    Issue Board
                </NavLink>
                <NavLink to="/login" activeClassName="selected">
                    Login
                </NavLink>
                <NavLink to="/signup" activeClassName="selected">
                    Sign Up
                </NavLink>
            </div>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    .logo {
        width: 25px;
        height: 25px;
        background-color: blue;
    }

    .nav-links {
        display: flex;
        width: 30%;
        justify-content: space-between;
    }
`;

export default Nav;
