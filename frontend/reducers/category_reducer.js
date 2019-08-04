import { FETCH_ALL_CATEGORIES } from "../actions/business_actions";
import { merge } from "lodash";

const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
      return merge({}, state, action.types);
    default:
      return state;
  }
};

export default categoryReducer;
