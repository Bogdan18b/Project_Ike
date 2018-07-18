import * as SearchApiUtil from '../util/search_api_util';

export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

export const fetchSearchResults = businesses => {
  return {
    type: FETCH_SEARCH_RESULTS,
    businesses
  };
} ;

export const clearSearchResults = () => {
  return {
    type: CLEAR_SEARCH_RESULTS
  };
} ;

export const receiveSearchResults = inputValue => {
  return dispatch => {
    return SearchApiUtil.searchBusinesses(inputValue).then(businesses => {
      return dispatch(fetchSearchResults(businesses));
    });
  };
};
