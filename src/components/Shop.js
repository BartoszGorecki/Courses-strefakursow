import React, { Component } from "react";
import { connect } from "react-redux";
import ShopItem from "./ShopItem";
import { removeFromCart } from "../actions";
import { Courses } from "../style/Home";
import "../style/Shop.css";

class Shop extends Component {
  handleRemoveFromCart = id => {
    this.props.removeFromCart(id);
  };

  render() {
    const { data: items } = this.props.shop;
    const { data: authors } = this.props.authors;
    let sum = 0;
    if (items.length > 0) {
      sum += items.reduce((acc, ele) => acc + ele.price, 0);
    }
    let word;
    if (items.length === 1) {
      word = "kurs";
    } else if (items.length === 2 || items.length === 3 || items.length === 4) {
      word = "kursy";
    } else {
      word = "kursów";
    }
    console.log("re-render z SHOP");
    return (
      <Courses>
        {items.length > 0 ? (
          <div>Aktualnie masz {items.length + " " + word} w koszyku</div>
        ) : (
          <div>Koszyk pusty, wybierz swój kurs!</div>
        )}
        {items.map(({ title, id, image, authorId, price }) => {
          return (
            <ShopItem
              key={id}
              image={image}
              price={price}
              authors={authors}
              authorId={authorId}
              handleRemoveFromCart={this.handleRemoveFromCart}
              title={title}
              id={id}
            />
          );
        })}
        {items.length > 0 && (
          <div>
            Łącznie do zapłaty: <span className="bigger">{sum}zł</span>
          </div>
        )}
      </Courses>
    );
  }
}

const mapStateToProps = state => {
  return {
    shop: state.shop,
    authors: state.authors
  };
};

export default connect(
  mapStateToProps,
  { removeFromCart }
)(Shop);
