import { RECEIVE_REVIEW_ERRORS } from '../actions/review_actions';

const reviewErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    default:
      return [];
  }
};

export default reviewErrorsReducer;
