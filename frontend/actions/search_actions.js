import * as SearchApiUtil from "../util/search_api_util";

export const FETCH_SEARCH_RESULTS = "FETCH_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

export const fetchSearchResults = ({ businesses, categories }) => ({
  type: FETCH_SEARCH_RESULTS,
  businesses,
  categories
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
});

export const receiveTypeFromSearch = category => ({
  type: RECEIVE_CATEGORY,
  category
});

export const receiveSearchResults = inputValue => dispatch =>
  SearchApiUtil.searchBusinesses(inputValue).then(payload =>
    dispatch(fetchSearchResults(payload))
  );
