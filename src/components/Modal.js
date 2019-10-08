import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Buttoncontainer } from "./Button";
import { Link } from "react-router-dom";
import { ModalContainer } from "./ModelContainerStyle";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
          {(value)=>{
              const {modalOpen,closeModal}=value;
              const{ img, title, price}=value.modalProduct;
              if(!modalOpen){
              return null;
              }
              else{
               return(
                <ModalContainer>
                    <div className="container">
                    <div className="row">
                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4
                    text-center  message">
                    <h5>Item added to the Wishlist</h5>
                    <img src={img} className="img-fluid "  alt="product" ></img>
                    <h5>{title}</h5>
                    <h5 className="PriceLbl">Price: <span className="RupeeSys">  &#8377;</span><span className="Amount"> {price} </span></h5>
                    <Link to="/profile">
                      <Buttoncontainer onClick={()=>closeModal()}>
                        Back to List
                      </Buttoncontainer>
                    </Link>
                    <Link to="/wishlist">
                      
                    </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
