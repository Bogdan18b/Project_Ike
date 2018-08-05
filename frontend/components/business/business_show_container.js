import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { requestBusiness } from '../../actions/business_actions';
import { deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let reviews = Object.values(state.entities.reviews);
  const currentUserId = state.session.id;
  return {
    business: state.entities.businesses[ownProps.match.params.businessId],
    reviews,
    currentUserId,
    types: state.entities.businessTypes,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestBusiness: (id) => dispatch(requestBusiness(id)),
    deleteReview: (id) => dispatch(deleteReview(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
