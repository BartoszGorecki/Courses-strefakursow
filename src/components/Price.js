import React from "react";
import PropTypes from "prop-types";
import "../style/Price.css";
import SvgCart from "./SvgCart";

const Price = ({ price, ide, addToCartHandler }) => {
  return (
    <div className="course-shop flex">
      <div className="course-shop-info">Dodano do koszyka!</div>
      <div
        className="course-price"
        data-id={ide}
        onClick={e => addToCartHandler(e)}
      >
        <div className="course-price-1 flex">
          {price}
          <small>zł</small>
        </div>
        <div className="course-price-icon flex">
          <span className="course-price-icon-small flex">
            <SvgCart />
          </span>
        </div>
      </div>
    </div>
  );
};

Price.propTypes = {
  ide: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  addToCartHandler: PropTypes.func.isRequired
};

export default Price;
