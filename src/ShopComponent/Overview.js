import React, { Component } from "react";
import styled from "styled-components";
import { StoreConsumer } from "../StoreContext";
import "./overview.css"
export default class Overview extends Component {
  render() {
    return (
      <StoreConsumer>
        {value => {
          console.log(value.storeProfile);
          const { id,address, offerTitle,offerDesc,state,city,location,type,categories, openingTime,closingTime, phone } = value.storeProfile;
          return (
            // <OverviewStyle>
            //   <div className="ui segments  mbot">
            //     <div className="col-l-1by3    pl0 pr20">
            //       <div className="mbot">
            //         <h3 className="mb5">Phone Number</h3>
            //         <span className="left">
            //           <span className="contact-text">+91 {Phone}</span>
            //         </span>
            //       </div>
            //       <br />
            //       <div className="mbot">
            //         <h4 className="mb5">Available Offers</h4>
            //         <span className="left">
            //           <span>{Offers}</span>
            //         </span>
            //       </div>
            //     </div>
            //     <div className="col-l-1by3    pl0 pr20">
            //       <div className="mbot">
            //         <h3 className="mt0 mb5 inlineblock">Opening Hours</h3>
            //         <span className="contact-text">{Timing}</span>
            //       </div>
            //       <div className="mb5">
            //         <h4>Address</h4>
            //       </div>
            //       <div className="mbot0">
            //         <span>{Address}</span>
            //       </div>
            //     </div>
            //     <div className="col-l-1by3  pl20 pr20">
            //       <div className="pbot0 res-info-group ">
            //         <h2 className="mbot0">More Info</h2>
            //       </div>
            //     </div>
            //   </div>
            // </OverviewStyle>

            <div class="overviewOuterContainer">
            <label className="keyLabel">City :</label> <label className="valueLabel">{city}</label><br/>
            <label className="keyLabel">State :</label> <label className="valueLabel">{state}</label> <br/>
            <label className="keyLabel">Location :</label> <label className="valueLabel">{location}</label><br/>
            <label className="keyLabel">Address :</label> <label className="valueLabel">{address}</label><br/>
            <label className="keyLabel">Cloth Types :</label> <label className="valueLabel">{type}</label><br/>
            <label className="keyLabel">Cloth categories :</label> <label className="valueLabel">{categories}</label><br/>
            <label className="keyLabel">Opening Time :</label> <label className="valueLabel">{openingTime}</label><br/>
            <label className="keyLabel">Closing Time :</label> <label className="valueLabel">{closingTime}</label><br/>
            <label className="keyLabel">Contact :</label> <label className="valueLabel">{phone}</label><br/>

            </div>
          );
        }}
      </StoreConsumer>
    );
  }
}
const OverviewStyle = styled.div`
  .ui.segments{
    flex-direction: column;
    background:#333;
    position: relative;
    margin: 20px 50px;
    border: 1px solid #e7e7e7;
    box-shadow: none;
    border-radius: .28571429rem;
  .mbot{
      margin-bottom: 20px;
    }
  .contact-text{
      font-weight: 700;
      font-size: 18px;
      color: #099e44;
    }
  .ares-info-left h2 {
      font-size: 18px;
  }
  .res-info-left h2 {
    font-size: 18px;
}
  .pbot0 {
  padding-bottom: 10px;
}
`;
