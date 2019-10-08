import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import {Link} from 'react-router-dom';
import {Buttoncontainer} from '../components/Button';
import styled from 'styled-components'
import EditProduct from './EditProduct';
import './ProductDetail.css';

export default class ProductDetail extends Component {
    render() {
        return (
          <ProductConsumer>
            {(value)=>{
              const{id,title,img,info,price,size}=
              value.detailProduct;
              return(
                <div className="productDetailContainer">
                  
                    <div className="productDetailProductName">
                      <h1>{title}</h1>
                    </div>
                 
                  {/*end title */}
                  {/*Product info*/}
                  
                  <div className="productDetailDetail-Product">
                   
                    <img src={img} className="productDetailProductImage" alt="product"/>
                    
                    <EditProduct/>
                    {/*product image*/}
                    </div>
                   
                </div>
              )
            }}
          </ProductConsumer>
        )
      }
    }
const Imgstyle=styled.div`
.Product-Detail{
    margin: 0px 300px 0px;
    border-bottom-left-radius: 100px;
  }
  .img-product{
    width: 250px;
    height: 350px;
  }
`
