import { combineReducers } from "redux";
import coursesReducer from "./coursesReducer";
import shoppingReducer from "./shoppingReducer";
import authorsReducer from "./authorsReducer";

export const rootReducer = combineReducers({
  courses: coursesReducer,
  shop: shoppingReducer,
  authors: authorsReducer
});
