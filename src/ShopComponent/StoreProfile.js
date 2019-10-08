import React, { Component } from "react";
import { StoreConsumer } from "../StoreContext";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";
export default class StoreProfile extends Component {
  render() {
    return (
      <StoreConsumer>
        {value => {
          const { id, name, photoUrl, location, rating, ratingCount } = value.storeProfile;
          var ratingValue = 0;
          if (rating != null && ratingCount != null) {
            ratingValue = rating / ratingCount;
          }
          return (
            <ShopStyle>
              <div className="container">
                <div className="row">
                  <div className="Profile col-md-8">
                    <img className="shop-img" src={photoUrl} />
                    <br />
                    <div className="shop-info">
                      <div className="col-lg-8 d-flex justify-content-between">
                        <div className="nameOfShop">
                          {" "}
                          <h1>{name}</h1>
                        </div>
                        <div className="col-lg-2 tac rateleft">
                          <div className=" ">
                            <h3>
                              {ratingValue.toFixed(1)} <i className="fas fa-star" />
                            </h3>
                          </div>
                        </div>
                      </div>
                      <span className="address">{location}</span>
                    </div>
                  </div>
                </div>
                <ToggleButton className="detailsOuterView" />
              </div>
            </ShopStyle>
          );
        }}
      </StoreConsumer>
    );
  }
}
const ShopStyle = styled.div`
  .shop-img{
    height: 400px;
    width: 1220px;
    background:transparent;
    border-radius: 8px;
  }
  

  .shop-info{
    background:transparent;
    margin-top:7px;
    width:1100px
  }
  .rate{
    background:#228B22;
    
  }
  
  .rateleft{
    background:#transparent;
    margin-top: 9px;
    color:#555555
    align:right;
   
  }
  .tab{
    padding-top:25px
    padding-left:25px
    align-content:center
    margin-right:120px;

  }
  .tab-Link:active{
    background:#228B22;
  }
  .tab-Link:hover{
    background:#228B22;
  }
  .tab-Link{
    text-Transform:capitalize;
    font-size:1.4rem;
    background:transperent;
    border:0rem;
    border:1rem;
    padding:0.2rem 0.5rem;
    cursor:pointer;
    margin:0.1rem 0.1rem 0.2rem 0;
    transition:all 0.1s ease-in-out;
    padding:5px 50px 10px 50px;
  }
    &:focus{
      outline:none;
  }
  .Profile{
    background:transparent;
    margin-left: -55px; 
  }
  mb5 {
    margin-bottom: 5px;
}
.left{
  float:left;
}
.pr20 {
  padding-right: 20px;
}
.pl20 {
  padding-left: 20px;
}
.col-l-1by3 {
  position: relative;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  float: left;
  width: 33.33333333%;
  box-sizing: border-box;
  
}

.nameOfShop{ 
  font-size: 1.3rem ;
  color: var(--Black);
  text-align: center; 

}

/*Star and rating*/
.main{
  color:  var(--yellowStar);
  margin-left: 4px; 
  font-size: 1.4rem ;
  
} 
.address{
  margin-left:19px;
  color:#777777
x
}

.detailsOuterView{
   background: var(--mainDark) !important; 
}

`;
