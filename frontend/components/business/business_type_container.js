import { connect } from 'react-redux';
import { requestAllBusinessTypes } from '../../actions/business_actions';
import { receiveTypeFromSearch } from '../../actions/search_actions';
import BusinessType from './business_type';

const mapStateToProps = ({ entities }) => {
  return {
    types: Object.values(entities.businessTypes)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllBusinessTypes: () => dispatch(requestAllBusinessTypes()),
    receiveTypeFromSearch: (type) => dispatch(receiveTypeFromSearch(type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessType);
