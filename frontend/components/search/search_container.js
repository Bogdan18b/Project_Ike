import React, { useEffect } from "react";
import { connect } from "react-redux";
import Search from "./search";
import {
  receiveSearchResults,
  clearSearchResults,
  receiveTypeFromSearch
} from "../../actions/search_actions";
import {
  requestAllBusinesses,
  requestAllBusinessTypes,
  requestBusiness
} from "../../actions/business_actions";
import PropTypes from "prop-types";

const mapStateToProps = ({ searchResults, entities }) => ({
  businesses: entities.businesses,
  categories: entities.categories,
  searchResults
});

const mapDispatchToProps = dispatch => ({
  receiveSearchResults: inputValue =>
    dispatch(receiveSearchResults(inputValue)),
  clearSearchResults: () => dispatch(clearSearchResults()),
  receiveTypeFromSearch: type => dispatch(receiveTypeFromSearch(type)),
  requestAllBusinesses: () => dispatch(requestAllBusinesses()),
  requestBusiness: id => dispatch(requestBusiness(id)),
  requestAllBusinessTypes: () => dispatch(requestAllBusinessTypes())
});

const SearchResults = props => {
  useEffect(() => {
    props.requestAllBusinessTypes().then(() => props.requestAllBusinesses());
  }, []);
  if (
    Object.keys(props.businesses).length === 0 ||
    Object.keys(props.categories).length === 0
  ) {
    return null;
  }
  let items = [];
  if (Object.keys(props.searchResults).length !== 0) {
    props.searchResults.businessIds.forEach(id =>
      items.push(props.businesses[id])
    );
    props.searchResults.typeIds.forEach(id => items.push(props.categories[id]));
  }
  return (
    <Search
      businesses={items}
      receiveSearchResults={props.receiveSearchResults}
      clearSearchResults={props.clearSearchResults}
      receiveTypeFromSearch={props.receiveTypeFromSearch}
    />
  );
};

SearchResults.propTypes = {
  categories: PropTypes.object,
  businesses: PropTypes.object,
  clearSearchResults: PropTypes.func,
  receiveSearchResults: PropTypes.func,
  receiveTypeFromSearch: PropTypes.func,
  requestAllBusinessTypes: PropTypes.func,
  requestAllBusinesses: PropTypes.func,
  requestBusiness: PropTypes.func,
  searchResults: PropTypes.shape({
    businessIds: PropTypes.arrayOf(PropTypes.number),
    reviewBusinessIds: PropTypes.arrayOf(PropTypes.number),
    typeIds: PropTypes.arrayOf(PropTypes.number)
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
