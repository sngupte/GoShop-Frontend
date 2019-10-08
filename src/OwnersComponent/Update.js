import React, { Component } from 'react'
import Product from './Product';
import Title from '../components/Title';
import {storeProducts} from '../Data';
import './Update.css';
import {ProductConsumer} from '../context';

export default class Update extends Component {
  state={
    products:storeProducts
  }
  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
    <div className="productListContainer">
      <div className=" ">
          <Title name="our" title="products"/>
          <div className="row">
          <ProductConsumer>
            {value =>{
              return value.products.map(product=>{
                return<Product key={product.id} product={product}
                />;
              })
            }}
          </ProductConsumer>
          </div>
        </div>
        </div>
      </React.Fragment>
    )
  }
}
