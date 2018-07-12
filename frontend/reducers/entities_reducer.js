import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import businessReducer from './business_reducer';
import businessTypeReducer from './business_type_reducer';

export default combineReducers({
  users: usersReducer,
  businesses: businessReducer,
  businessTypes: businessTypeReducer
});
