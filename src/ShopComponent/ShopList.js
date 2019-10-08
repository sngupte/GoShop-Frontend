import React, { Component } from 'react'
import Shop from './Shop';
import { storeList } from '../ShopData'
import { StoreConsumer } from '../StoreContext';
export default class ShopList extends Component {
  state = {
    Shops:[],
  };
  render() {
    console.log(this.state.Shops)
    return (
      <React.Fragment>
        <div className="container">
          <div className="col-lg-16 col-md-20 ">
            <div className="row shop-card">
              <StoreConsumer>
                {value => {
                   return value.shops.map(shop => {
                    return <Shop key={shop.id} shop={shop}
                    />;
                  }); 
                }}
              </StoreConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
