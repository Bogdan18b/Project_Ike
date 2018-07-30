import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { requestAllBusinesses, requestAllBusinessTypes } from '../../actions/business_actions';

const mapStateToProps = ({ entities, type = {} }) => {
  return {
    businesses: entities.businesses,
    types: Object.values(entities.businessTypes),
    businessType: type
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
