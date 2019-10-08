import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../Data';
import {ProductConsumer} from '../context'
import './ProductList.css';

export default class ProductList extends Component {
  state={
    products:storeProducts
  }
  render() {
    console.log("shop id: "+this.props.shopId);

    return (
      <React.Fragment>
      <div className="productListContainer">
      <div className="col-lg-16 col-md-16 ">
          <Title name="our" title="products"/>
          <div className="row">
          <ProductConsumer>
            {value =>{
              value.setProducts(this.props.shopId);
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
     );
  }
}