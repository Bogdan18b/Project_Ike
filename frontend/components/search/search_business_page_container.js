import { connect } from 'react-redux';
import Search from './search';
import { receiveSearchResults, clearSearchResults } from '../../actions/search_actions';
import { withRouter } from 'react-router';

const mapStateToProps = ({ searchResults }) => {
  let businesses = Object.values(searchResults);
  return {
    businesses,
    classNameMain: "ike-search-div-business",
    classNameList: "ike-search-list-business"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveSearchResults: inputValue => dispatch(receiveSearchResults(inputValue)),
    clearSearchResults: () => dispatch(clearSearchResults())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
