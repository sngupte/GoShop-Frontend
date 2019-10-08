import React, { Component } from "react";
import { StoreConsumer } from "../StoreContext";
import Overview from "./Overview";
import ProductList from "../components/ProductList";
import Review from "./Review";
export default class ToggleComponent extends Component {
  render() {
    return (
      <StoreConsumer>
        {value => {
          if (value.overview === true) {
            return <Overview />;
          }
          if (value.productList === true) {
            return <ProductList shopId={value.storeProfile.id}/>;
          }
          if (value.review === true) {
            return <Review shopId={value.storeProfile.id}/>;
          }
        }}
      </StoreConsumer>
    );
  }
}
