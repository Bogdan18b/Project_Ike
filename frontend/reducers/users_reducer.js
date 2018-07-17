import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { FETCH_ALL_REVIEWS } from '../actions/review_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case FETCH_ALL_REVIEWS:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default usersReducer;
