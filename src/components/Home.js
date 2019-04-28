import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourses, addToCart, fetchAuthors } from "../actions";
import PropTypes from "prop-types";
import { Courses } from "../style/Home";
import Course from "./Course";

class Home extends Component {
  componentDidMount() {
    this.addingInfoCart();
    this.props.fetchCourses();
    this.props.fetchAuthors();
  }
  shouldComponentUpdate(prevProps) {
    if (prevProps.shop.data !== this.props.shop.data) {
      this.addingInfoCart();
    }
    return true;
  }
  addingInfoCart = () => {
    const inCart = document.querySelectorAll(".course-price");
    this.actualShop()
      .then(data => {
        for (let i = inCart.length - 1; i >= 0; i--) {
          if (this.isInShop(+inCart[i].dataset.id)) {
            inCart[i].parentElement.firstChild.style.display = "block";
            inCart[i].classList.add("in-cart");
          } else {
            inCart[i].parentElement.firstChild.style.display = "none";
            inCart[i].classList.remove("in-cart");
          }
        }
      })
      .catch(console.log);
  };
  actualShop = () => {
    return new Promise(resolve => {
      return setTimeout(() => {
        resolve(this.props.shop.data);
      }, 0);
    });
  };
  handleClick = e => {
    // const clas = e.target.className;
    // const nod = e.target.nodeName;
    // if (
    //   e.target &&
    //   (clas !== "course-price-1 flex" && clas !== "course-price-icon") &&
    //   (nod === "DIV" || nod === "SECTION")
    // ) {
    //   console.log("halko z klika", e.target.className);
    // }
  };
  isInShop = id => {
    return this.props.shop.data.find(item => item.id === id);
  };
  addToCartHandler = e => {
    const target = +e.currentTarget.dataset.id;
    const course = this.props.courses.data.find(course => course.id === target);
    !this.isInShop(course.id) && this.props.addToCart(course);
  };
  render() {
    console.log("re-render z Home");
    return (
      <Courses onClick={this.handleClick}>
        {this.props.courses.data.map(
          ({
            id,
            title,
            image,
            price,
            description,
            rating,
            duration,
            categories,
            is_new
          }) => {
            return (
              <Course
                addToCartHandler={this.addToCartHandler}
                key={id}
                ide={id}
                title={title}
                image={image}
                price={price}
                description={description}
                rating={rating}
                duration={duration}
                categories={categories}
                is_new={is_new}
              />
            );
          }
        )}
      </Courses>
    );
  }
}

Home.propTypes = {
  courses: PropTypes.shape({
    data: PropTypes.array
  }),
  shop: PropTypes.shape({
    data: PropTypes.array
  }),
  fetchCourses: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    courses: state.courses,
    shop: state.shop
  };
};

export default connect(
  mapStateToProps,
  { fetchCourses, addToCart, fetchAuthors }
)(Home);
