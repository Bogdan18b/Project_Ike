import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { requestAllBusinesses, requestAllBusinessTypes } from '../../actions/business_actions';

const mapStateToProps = ({ entities }) => {
  let businesses = entities.businesses;
  // businesses.forEach(bus => bus.businessType = businessType[bus.businessTypeId].name);
  return {
    businesses,
    types: Object.values(entities.businessTypes),
    businessType: {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllBusinesses: () => {
      return dispatch(requestAllBusinesses());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
