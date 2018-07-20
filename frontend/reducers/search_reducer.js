import { FETCH_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/search_actions';
import { merge } from 'lodash';

let defaultState = {
  businessIds: [],
  typeIds: []
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      let results = {
        businessIds: action.businesses,
        typeIds: action.businessTypes,
      };
      return results;
    case CLEAR_SEARCH_RESULTS:
      return defaultState;
    default:
      return state;
  }
};

export default searchReducer;
