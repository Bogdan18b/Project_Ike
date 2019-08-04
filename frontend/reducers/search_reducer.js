import {
  FETCH_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS
} from "../actions/search_actions";
import { FETCH_ALL_REVIEWS } from "../actions/review_actions";
import { merge } from "lodash";

let defaultState = {
  businessIds: [],
  typeIds: [],
  reviewBusinessIds: []
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      let results = merge({}, state);
      results.businessIds = action.businesses;
      results.typeIds = action.categories;
      return results;
    case FETCH_ALL_REVIEWS:
      results = merge({}, state);
      results.reviewBusinessIds = action.businesses;
      return results;
    case CLEAR_SEARCH_RESULTS:
      return defaultState;
    default:
      return state;
  }
};

export default searchReducer;
