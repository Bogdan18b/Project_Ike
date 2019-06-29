import * as SearchApiUtil from "../util/search_api_util";

export const FETCH_SEARCH_RESULTS = "FETCH_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";
export const RECEIVE_BUSINESS_TYPE = "RECEIVE_BUSINESS_TYPE";

export const fetchSearchResults = ({ businesses, businessTypes }) => ({
  type: FETCH_SEARCH_RESULTS,
  businesses,
  businessTypes
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
});

export const receiveTypeFromSearch = businessType => ({
  type: RECEIVE_BUSINESS_TYPE,
  businessType
});

export const receiveSearchResults = inputValue => dispatch =>
  SearchApiUtil.searchBusinesses(inputValue).then(payload =>
    dispatch(fetchSearchResults(payload))
  );
