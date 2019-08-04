import { RECEIVE_CATEGORY } from "../actions/search_actions";

const searchForTypeReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORY:
      return action.category;
    default:
      return state;
  }
};

export default searchForTypeReducer;
