import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { requestBusiness } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    business: state.entities.businesses[ownProps.match.params.businessId],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestBusiness: (id) => dispatch(requestBusiness(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
