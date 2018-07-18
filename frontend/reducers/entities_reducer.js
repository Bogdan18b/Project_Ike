import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import businessReducer from './business_reducer';
import reviewReducer from './review_reducer';
import searchReducer from './search_reducer';
import businessTypeReducer from './business_type_reducer';

export default combineReducers({
  users: usersReducer,
  businesses: businessReducer,
  businessTypes: businessTypeReducer,
  reviews: reviewReducer
});
