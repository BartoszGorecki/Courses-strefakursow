import React from "react";
import PropTypes from "prop-types";
import Price from "./Price";
import Info from "./Info";
import { CourseS } from "../style/Course";
import "../style/Course.css";

const Course = ({
  title,
  image,
  price,
  duration,
  rating,
  categories,
  is_new,
  ide,
  addToCartHandler
}) => {
  return (
    <CourseS>
      <article className="course-container">
        <div className="course-image" style={{ background: `url(${image})` }} />
        <Info
          title={title}
          categories={categories.slice(0, 2)}
          duration={duration}
          rating={rating + ".0"}
          is_new={is_new}
        />
        <Price ide={ide} price={price} addToCartHandler={addToCartHandler} />
      </article>
    </CourseS>
  );
};

Course.propTypes = {
  image: PropTypes.string.isRequired
};

export default Course;
