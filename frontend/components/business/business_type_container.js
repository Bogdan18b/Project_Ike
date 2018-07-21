import { connect } from 'react-redux';
import { requestAllBusinessTypes } from '../../actions/business_actions';
import { receiveTypeFromSearch } from '../../actions/search_actions';
import BusinessType from './business_type';

const mapStateToProps = ({ entities }) => {
  debugger
  return {
    types: Object.values(entities.businessTypes),
    className: "ike-business-header-nav"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveTypeFromSearch: (type) => dispatch(receiveTypeFromSearch(type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessType);
