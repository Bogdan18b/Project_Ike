import { RECEIVE_REVIEW_ERRORS, RECEIVE_REVIEW } from '../actions/review_actions';

const reviewErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case RECEIVE_REVIEW:
      return state;
    default:
      return state;
  }
};

export default reviewErrorsReducer;
