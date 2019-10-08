import React, { Component } from "react";
import { StoreConsumer } from "../StoreContext";
import { Link } from "react-router-dom";
import { ProductWrapper } from "../components/ProductWrapperStyle";
import PropTypes from "prop-types";
export default class Shop extends Component {
  render() {
    const {
      id,
      name,
      photoUrl,
      location,
      rating,
      ratingCount
    } = this.props.shop;
    var ratingValue = 0;
    if (rating != null && ratingCount != null) {
      ratingValue = rating / ratingCount;
    }

    return (
      <ProductWrapper className="col-9 col-sm-6 col-lg-3 my-3">
        <div className="card">
          <StoreConsumer>
            {value => (
              <div
                className="img-container p-3"
                onClick={() => value.handleProfile(id)}
              >
                <Link to="/profile">
                  <img src={photoUrl} alt="shop" className="card-img-top" />
                </Link>
              </div>
            )}
          </StoreConsumer>
          <div className="card-footer d-flex justify-content-between ">
            <p className="align-self-centerv mb-0 ">
              <h4 className="nameOfShop"> {name}</h4>
            </p>
            <p className="rating">
              {" "}
              {ratingValue.toFixed(1)} <i className="fas fa-star" />
            </p>
          </div>
          <p className="5px">
            <h3 className="address">
              {/* <span className="address"> Address: </span> */}
              {location}
            </h3>
          </p>
        </div>
      </ProductWrapper>
    );
  }
}
Shop.propTypes = {
  store: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    StoreName: PropTypes.string
  }).isRequired
};
