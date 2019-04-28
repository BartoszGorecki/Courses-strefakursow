import axios from "axios";

export const fetchCourses = () => dispatch => {
  return axios.get("http://localhost:7777/courses").then(({ data }) => {
    dispatch(setCourses(data));
  });
};

const setCourses = data => {
  return {
    type: "SET_COURSES",
    payload: data
  };
};

export const addToCart = data => {
  return {
    type: "ADD_TO_CART",
    payload: data
  };
};

export const removeFromCart = id => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id
  };
};

export const fetchAuthors = () => dispatch => {
  return axios.get("http://localhost:7777/authors").then(({ data }) => {
    dispatch(setAuthors(data));
  });
};

const setAuthors = data => {
  return {
    type: "SET_AUTHORS",
    payload: data
  };
};
