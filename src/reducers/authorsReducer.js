export default (state = { data: [] }, action) => {
  switch (action.type) {
    case "SET_AUTHORS":
      return { data: action.payload };
    default:
      return state;
  }
};
