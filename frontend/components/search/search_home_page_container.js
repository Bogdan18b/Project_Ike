import { connect } from 'react-redux';
import Search from './search';
import { receiveSearchResults, clearSearchResults, receiveTypeFromSearch } from '../../actions/search_actions';
import { withRouter } from 'react-router';

const mapStateToProps = ({ searchResults }) => {
  let businesses = Object.values(searchResults);
  return {
    businesses,
    classNameMain: "ike-search-div-home",
    classNameList: "ike-search-list-home",
    classNameButton: "ike-search-button-home"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveSearchResults: inputValue => dispatch(receiveSearchResults(inputValue)),
    clearSearchResults: () => dispatch(clearSearchResults()),
    receiveTypeFromSearch: (type) => dispatch(receiveTypeFromSearch(type))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
