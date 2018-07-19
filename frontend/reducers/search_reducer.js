import { FETCH_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/search_actions';
import { merge } from 'lodash';

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      return merge({}, action.businesses, action.types);
    case CLEAR_SEARCH_RESULTS:
      return {};
    default:
      return state;
  }
};

export default searchReducer;
