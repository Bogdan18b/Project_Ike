import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { requestAllBusinesses } from '../../actions/business_actions';

const mapStateToProps = ({ entities }) => {
  return {
    businesses: Object.values(entities.businesses)
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
