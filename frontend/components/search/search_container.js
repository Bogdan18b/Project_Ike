import { connect } from 'react-redux';
import SearchBox from './search';

const mapStateToProps = ({ entities }) => {
  let businesses = Object.values(entities.businesses);
  let types = Object.values(entities.business_types);
  debugger
  return {

  };
};

const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
