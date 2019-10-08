import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../context";
import PropTypes from 'prop-types';


export default class Product extends Component {
  
    render() {
      const {id ,title, img, price}=this.props.product;
      return (
        <ProductWrapper className="col-8 mx-auto col-md-6 col-lg-3 my-1"> 
          <div className="card">
          <ProductConsumer>
            {(value)=>(
              <div className="img-container p-5"         
                 onClick={()=>
                 value.handleDetail(id)
                }
                  >
              <Link to="/editProduct">
              <img src={img} alt="product" className="card-img-top"/>
              </Link>
              </div>
             
            )}
            
           </ProductConsumer>
       
           {/* card footer*/}
            <div className="card-footer d-flex justify-content-between">
              <p className="align-self-centerv mb-0">
              {title}
              </p>
              <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">Rs.</span>
                  {price}
              </h5>
            </div>
            </div>
        </ProductWrapper>
      )
    }
  }
  Product.propTypes={
    product:PropTypes.shape({
      id:PropTypes.number,
      img:PropTypes.string,
      title:PropTypes.string,
      price:PropTypes.number,
      inWish:PropTypes.bool
    }).isRequired
  }
  
  export const ProductWrapper=styled.div`
  .card{
    border-color:transparent;
    transition:all 1s linear;
  }
  .card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
  }
  &:hover{
    .card{
      border:0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
      background:rgba(247,247,247);
    }
  }
  .img-container{
    position:relative;
    overflow:hidden;
  }
  .card-img-top{
      transition:all 0.1s linear;
  }
  .img-container:hover .card-img-top{
    transform:scale(1.2);
  }
  .wish-btn{
      position: absolute;
      bottom:0;
      right: 0;
      padding: 0.2rem 0.4rem;
      background: var(--lightblue);
      border: none;
      color: var(--mainwhite);
      font-size:1.4rem;
      border-radius:0.5rem 0 0 0;
      transform:translate(100%, 100%);
  
  }
  .img-container:hover .wish-btn{
      transform: translate(0,0);
  }
  .wish-btn:hover{
      color:var(--Heartred);
      cursor: pointer;
  }
  `;