import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { logOut } from "../actions/actionsIndex";
import { connect } from "react-redux";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";

const Nav = props => {
    console.log("nav props:  ", props);

    console.log("user id: ", localStorage.getItem("id"));
    const userID = localStorage.getItem("id");

    return (
        <StyledNav>
            <NavLink to="/" className="logo">
                <LogoIcon />
            </NavLink>


            <div className="nav-links">
                <NavLink
                    to={
                        props.isLoggedIn
                            ? `/issueboard/${userID}`
                            : `/issueboard/:id`
                    }
                    activeClassName="selected"
                >
                    Issue Board
                </NavLink>

                <NavLink
                    to="/login"
                    activeClassName="selected"
                    onClick={props.logOut}
                >
                    {!props.isLoggedIn ? "Login" : "Logout"}
                </NavLink>

                {!props.isLoggedIn ? (
                    <NavLink to="/signup" activeClassName="selected">
                        Sign Up
                    </NavLink>
                ) : null}
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 999;
    .logo {
        width: 25px;
        padding-top: 5px;
    }

    .nav-links {
        display: flex;
        /* width: 30%; */
        justify-content: space-between;

        a {
            text-decoration: none;
            color: #333;
            font-size: 15px;
            font-weight: 600;
            position: relative;
            line-height: 3.5rem;
            margin-left: 2.5rem;
        }
    }

    .selected::after {
        content: "";
        width: 100%;
        height: 5px;
        background-color: #217aff;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps, { logOut })(Nav);
