import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { FETCH_ALL_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';
import { FETCH_BUSINESS } from '../actions/business_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.payload.user.id]: action.payload.user});
    case FETCH_BUSINESS:
      return merge({}, state, action.payload.users);
    case FETCH_ALL_REVIEWS:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default usersReducer;
