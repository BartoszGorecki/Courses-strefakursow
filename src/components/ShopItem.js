import React from "react";
import PropTypes from "prop-types";
import { ShopButton } from "../style/ShopItem";

const ShopItem = ({
  title,
  id,
  handleRemoveFromCart,
  image,
  authorId,
  authors,
  price
}) => {
  return (
    <div className="shop-item" key={id}>
      <div
        className="shop-item-image"
        style={{ background: `url(${image})` }}
      />
      <div className="shop-item-title">
        <div className="flex">{title}</div>
        <div className="shop-item-author flex">
          {authors.find(author => author.id === authorId).name}
        </div>
      </div>
      <div className="shop-item-last">
        <div className="shop-item-last-price flex2">
          <span>{price}zł</span>
        </div>
        <div className="flex2">
          <ShopButton onClick={handleRemoveFromCart.bind(this, id)}>
            Usuń
          </ShopButton>
        </div>
      </div>
    </div>
  );
};

ShopItem.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  authorId: PropTypes.number.isRequired,
  authors: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired
};

export default ShopItem;
