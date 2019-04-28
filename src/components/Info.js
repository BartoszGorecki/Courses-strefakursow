import React from "react";
import PropTypes from "prop-types";
import "../style/Info.css";
import SvgStarEmpty from "./SvgStarEmpty";
import SvgStarFull from "./SvgStarFull";

const ratingMaker = rating => {
  const max = 5;
  return [...Array(rating).fill(true), ...Array(max - rating).fill(false)];
};

const Info = ({ categories, duration, title, rating, is_new }) => {
  return (
    <section className="course-info">
      <div className="course-info-title flex2">{title}</div>
      <div className="course-info-desc flex2">
        {categories.map((item, index) => (
          <div key={index}>
            <div className="course-info-desc-lang">{item}</div>
            <div className="breaker in-line" />
          </div>
        ))}
        Czas trwania {duration}
      </div>
      <div className="course-info-extra flex2">
        <div className="course-info-extra-circle flex">{rating}</div>
        <div>
          {ratingMaker(+rating).map((item, index) => {
            return item ? (
              <SvgStarFull key={index} />
            ) : (
              <SvgStarEmpty key={index} />
            );
          })}
        </div>

        {is_new && <div className="course-info-new flex">Nowość</div>}
      </div>
    </section>
  );
};

Info.propTypes = {
  is_new: PropTypes.number,
  rating: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Info;
