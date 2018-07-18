import { FETCH_SEARCH_RESULTS } from '../actions/search_actions';
import { merge } from 'lodash';

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      return action.businesses;
    default:
      return state;
  }
};

export default searchReducer;
