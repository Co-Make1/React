import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = props => {
    console.log("nav props:  ", props);

    const Logout = () => {
        localStorage.removeItem("token");
        // props.history.push("/login");
    };

    return (
        <StyledNav>
            <div className="logo"></div>
            <div className="nav-links">
                <NavLink to="/" activeClassName="selected" exact>
                    Home
                </NavLink>
                <NavLink to="/about" activeClassName="selected">
                    About
                </NavLink>
                <NavLink
                    to={
                        window.localStorage.getItem("token")
                            ? `/issueboard/${props.user.id}`
                            : `/issueboard/:id`
                    }
                    activeClassName="selected"
                >
                    Issue Board
                </NavLink>
                <NavLink
                    to="/login"
                    activeClassName="selected"
                    onClick={Logout}
                >
                    {window.localStorage.getItem("token") !== null
                        ? "Logout"
                        : "Login"}
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
    padding: 0 10%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 999;
    .logo {
        width: 25px;
        height: 25px;
        background-color: blue;
    }

    .nav-links {
        display: flex;
        width: 30%;
        justify-content: space-between;

        a {
            text-decoration: none;
            color: #333;
            position: relative;
            line-height: 3.5rem;
        }
    }

    .selected::after {
        content: "";
        width: 100%;
        height: 5px;
        background-color: blue;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;

export default Nav;
