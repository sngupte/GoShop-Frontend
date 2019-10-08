import React, { Component } from "react";
import { StoreConsumer } from "../StoreContext";
import ToggleComponent from "./ToggleComponent";
import './ToggleButton.css';
export default class ToggleButton extends Component {
  render() {
    return (
      <StoreConsumer>
        {value => {
         
          return(
          <div className="col-lg-12">
            <ul className="tab nav nav-tabs">
              <li className="nav-item navItem" >
                <button
                  className="tab-Link nav-link "
                  data-toggle="tab"
                  onClick={() => {
                    value.toggletToOverview();
                  }}
                >
                  Overview
                </button>
              </li>
              <li class="nav-item navItem">
                <button
                  className="tab-Link nav-link"
                  data-toggle="tab"
                  onClick={() => {
                    value.toggleToList();
                  }}
                >
                Product List
                </button>
              </li>
              <li class="nav-item">
                <button
                  className="tab-Link nav-link"
                  data-toggle="tab"
                  onClick={() => {
                    value.toggleToReview();
                  }}
                >
                  Review
                </button>
              </li>
            </ul>
            <ToggleComponent className="detailSection"/>
          </div>
          );
        }}
      </StoreConsumer>
    );
  }
}
