export default (state = { data: [] }, action) => {
  switch (action.type) {
    case "SET_COURSES":
      return { data: action.payload };
    default:
      return state;
  }
};
