export default (state = { data: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, data: [...state.data, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};
