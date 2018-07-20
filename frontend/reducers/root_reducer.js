import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import searchReducer from './search_reducer';
import searchForTypeReducer from './search_type_reducer';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  searchResults: searchReducer,
  type: searchForTypeReducer
});
