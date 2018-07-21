import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { receiveSearchResults, clearSearchResults, receiveTypeFromSearch } from '../../actions/search_actions';
import { requestAllBusinesses, requestAllBusinessTypes } from '../../actions/business_actions';
import { withRouter } from 'react-router';

const mapStateToProps = ({ searchResults, entities }) => {
  debugger
  return {
    businesses: entities.businesses,
    businessTypes: entities.businessTypes,
    searchResults,
    classNameMain: "ike-search-div-home",
    classNameList: "ike-search-list-home",
    classNameButton: "ike-search-button-home"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveSearchResults: inputValue => dispatch(receiveSearchResults(inputValue)),
    clearSearchResults: () => dispatch(clearSearchResults()),
    receiveTypeFromSearch: (type) => dispatch(receiveTypeFromSearch(type)),
    requestAllBusinesses: () => dispatch(requestAllBusinesses()),
    requestAllBusinessTypes: () => dispatch(requestAllBusinessTypes())
  };
};

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllBusinesses().then(() => {
      return this.props.requestAllBusinessTypes();
    });
  }

  render() {
    if (Object.keys(this.props.businesses).length === 0 || Object.keys(this.props.businessTypes).length === 0) {
      return <p></p>;
    }
    let items = [];
    if (Object.keys(this.props.searchResults).length !== 0) {
      this.props.searchResults.businessIds.forEach(id => items.push(this.props.businesses[id]));
      this.props.searchResults.typeIds.forEach(id => items.push(this.props.businessTypes[id]));
    }
    return <Search
      businesses={items}
      classNameMain={this.props.classNameMain}
      classNameList={this.props.classNameList}
      classNameButton={this.props.classNameButton}
      receiveSearchResults={this.props.receiveSearchResults}
      clearSearchResults={this.props.clearSearchResults}
      receiveTypeFromSearch={this.props.receiveTypeFromSearch}
      />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
