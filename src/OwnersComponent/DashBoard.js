import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default class DashBoard extends Component {
  render() {
    return (
      <Sidebar>
        <div id="sidebar">
          <ul className="vertical-menu">
            <Link to="/StoreDetail">
              <li>Home</li>
            </Link>
            <Link to="/addProduct">
              <li>Add</li>
            </Link>
            <Link to="/UpdateProduct">
              <li>Update</li>
            </Link>
            <h1>hello</h1>
          </ul>
        </div>
      </Sidebar>
    );
  }
}
const Sidebar = styled.div`
  .vertical-menu {
    height: 100%;
    width: 160px;
    z-index: 1;
    top: 35px;
    left: 0;
    background-color: var(--mainDark);
    overflow: hidden;
    padding-top: 16px;
    position: absolute;
  }

  .vertical-menu li {
    color: black;
    display: block;
    padding: 22px;
    text-decoration: none;
    color: White;
  }

  .vertical-menu li:hover {
    background-color: var(--mainYellow);
  }

  .vertical-menu li.active {
    background-color: var(--mainDark);
    color: white;
  }
`;
