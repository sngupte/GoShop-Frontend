import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import logo from "../logo.png";
import styled from "styled-components";
import { Buttoncontainer } from "./Button";
import { ProductConsumer } from "../context";
import './Navbar.css';
import Cookie from 'universal-cookie';
const cookie = new Cookie();
export default class Navbar extends Component {
    state = { LoginText: "Login" };

    componentDidMount() {
        console.log("Navbar Component did mount");

    }

    getButtonText = () => {
        if (cookie.get('user') != null) {
            const user = cookie.get('user').data;
            return (
                <button className="tablinks" onClick={() => {this.props.showHideUserProfile();}}>{user.name}</button>
            );
        }
        else {
            return (
                <Link to='/loginpage' className="ml-auto">
                    <button className="tablinks">Login</button>
                </Link>
            );

        }
    }


    render() {
        return (
            <div className="tabBar">
                <Link to="/" className="logoOuterView" >
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                {this.getButtonText()}
                {/* <button className="tablinks">London</button> */}
                <Link to='/wishlist'>
                    <button className="tablinks">Favorites</button>
                </Link>
            </div>
        );
    }
}



Navbar.propTypes = {
    executeCallback: PropTypes.func,
};

Navbar.defaultProps = {
    executeCallback: () => { },
};

const NavWrapper = styled.nav`
    background:var(--mainDark) !important;
    .nav-link{
        color:var(--mainwhite) !important;
        font-size:3.rem;
        text-transform:capitalize;
        position:absolute;
    }
    .search-bar{
        width:600px
        align-content: center;
    }

    .logoOuterView{
        height: auto;
        width: auto;
    }
  
    .navbar-brand{
        width: auto;
        height: auto;
    }

    .heartOuterView:{
       color: transparent;
    }

    .fa-heart{
        color: var(--themeOrange);
    }
    
    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
      }
`

