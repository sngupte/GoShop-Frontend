import React, { Component } from 'react'
//import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { ProductWrapper } from './ProductWrapperStyle';
import PropTypes from 'prop-types';
import './Product.css';

export default class Product extends Component {

  render() {
    const { id, name, photoUrl, originalPrice, inWish } = this.props.product;
    return (
      <div className="col-8  col-md-17 col-lg-4 my-4">

        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div className="img-container p-3"
                onClick={() =>
                  value.handleDetail(id)
                }
              >
                <Link to="/details">
                  <img src={photoUrl} alt="product" className="card-img-top" />
                </Link>

                <button className="wish-btn"
                  disabled={inWish ? true : false}
                  onClick={() => {
                    value.addToWish(id);
                    value.openModal(id);

                  }}>
                  {inWish ? (<p className="text-capitalize nb-0" disabled>
                    {" "}in Favorite</p>) : <i className="fas fa-heart" />}

                </button>
              </div>

            )}

          </ProductConsumer>

          {/* card footer*/}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-centerv mb-0 nameOfProduct">
              {name}
            </p>
            <h5 className="mb-0 amountLbl">
              <span className="mr-1">Rs.</span>
              {originalPrice}
            </h5>
          </div>
        </div>
      </div>
    )
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inWish: PropTypes.bool
  }).isRequired
}
