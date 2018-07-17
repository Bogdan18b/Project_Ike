import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { requestAllBusinesses, requestAllBusinessTypes } from '../../actions/business_actions';

const mapStateToProps = ({ entities }) => {
  return {
    businesses: Object.values(entities.businesses),
    types: Object.values(entities.businessTypes)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllBusinesses: () => {
      return dispatch(requestAllBusinesses());
    },
    requestAllBusinessTypes: () => {
      return dispatch(requestAllBusinessTypes());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
