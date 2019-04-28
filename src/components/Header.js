import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Head, RedDot } from "../style/Header";

class Header extends Component {
  render() {
    return (
      <Head className="flex2">
        <Link to="/">Home</Link>
        <Link to="/shop">
          Shop
          {this.props.shop.data.length > 0 && (
            <RedDot className="flex">{this.props.shop.data.length}</RedDot>
          )}
        </Link>
      </Head>
    );
  }
}

const mapStateToProps = state => {
  return {
    shop: state.shop
  };
};

export default connect(mapStateToProps)(Header);
