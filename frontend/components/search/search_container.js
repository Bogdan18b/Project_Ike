import { connect } from 'react-redux';
import Search from './search';
import { receiveSearchResults } from '../../actions/search_actions';

const mapStateToProps = ({ searchResults }) => {
  let businesses = Object.values(searchResults);
  debugger
  return {
    businesses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveSearchResults: inputValue => dispatch(receiveSearchResults(inputValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
