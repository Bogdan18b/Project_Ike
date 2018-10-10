import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { receiveSearchResults, clearSearchResults, receiveTypeFromSearch } from '../../actions/search_actions';
import { requestAllBusinesses, requestAllBusinessTypes, requestBusiness } from '../../actions/business_actions';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const mapStateToProps = ({ searchResults, entities }) => {
  return {
    businesses: entities.businesses,
    businessTypes: entities.businessTypes,
    searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveSearchResults: inputValue => dispatch(receiveSearchResults(inputValue)),
    clearSearchResults: () => dispatch(clearSearchResults()),
    receiveTypeFromSearch: (type) => dispatch(receiveTypeFromSearch(type)),
    requestAllBusinesses: () => dispatch(requestAllBusinesses()),
    requestBusiness: (id) => dispatch(requestBusiness(id)),
    requestAllBusinessTypes: () => dispatch(requestAllBusinessTypes())
  };
};

class SearchResults extends Component {

  componentDidMount() {
    this.props.requestAllBusinessTypes().then(() => {
      return this.props.requestAllBusinesses();
    });
  }

  render() {
    if (Object.keys(this.props.businesses).length === 0 || Object.keys(this.props.businessTypes).length === 0) {
      return null;
    }
    let items = [];
    if (Object.keys(this.props.searchResults).length !== 0) {
      this.props.searchResults.businessIds.forEach(id => items.push(this.props.businesses[id]));
      this.props.searchResults.typeIds.forEach(id => items.push(this.props.businessTypes[id]));
    }
    return <Search
      businesses={items}
      receiveSearchResults={this.props.receiveSearchResults}
      clearSearchResults={this.props.clearSearchResults}
      receiveTypeFromSearch={this.props.receiveTypeFromSearch}
      />
  }
}

SearchResults.propTypes = {
  businessTypes: PropTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
