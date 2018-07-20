import { RECEIVE_BUSINESS_TYPE } from '../actions/search_actions';
import { merge } from 'lodash';

const searchForTypeReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BUSINESS_TYPE:
      return action.businessType;
    default:
      return state;
  }
};

export default searchForTypeReducer;
