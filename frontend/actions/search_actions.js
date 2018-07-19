import * as SearchApiUtil from '../util/search_api_util';

export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export const RECEIVE_BUSINESS_TYPE = 'RECEIVE_BUSINESS_TYPE';

export const fetchSearchResults = ({ businesses, types }) => {
  return {
    type: FETCH_SEARCH_RESULTS,
    businesses,
    types
  };
};

export const clearSearchResults = () => {
  return {
    type: CLEAR_SEARCH_RESULTS
  };
};

export const receiveTypeFromSearch = (businessType) => {
  return {
    type: RECEIVE_BUSINESS_TYPE,
    businessType
  };
};

export const receiveSearchResults = inputValue => {
  return dispatch => {
    return SearchApiUtil.searchBusinesses(inputValue).then(payload => {
      return dispatch(fetchSearchResults(payload));
    });
  };
};
