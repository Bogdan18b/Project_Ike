import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import businessReducer from "./business_reducer";
import reviewReducer from "./review_reducer";
import searchReducer from "./search_reducer";
import categoryReducer from "./category_reducer";

export default combineReducers({
  users: usersReducer,
  businesses: businessReducer,
  categories: categoryReducer,
  reviews: reviewReducer
});
