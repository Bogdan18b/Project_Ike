import { connect } from 'react-redux';
import { requestAllBusinessTypes } from '../../actions/business_actions';
import BusinessType from './business_type';

const mapStateToProps = ({ entities }) => {
  return {
    types: Object.values(entities.businessTypes)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllBusinessTypes: () => dispatch(requestAllBusinessTypes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessType);
