import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { requestBusiness } from '../../actions/business_actions';
import { deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const reviews = Object.values(state.entities.reviews);
  const currentUserId = state.session.id;
  return {
    business: state.entities.businesses[ownProps.match.params.businessId],
    reviews,
    currentUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestBusiness: (id) => dispatch(requestBusiness(id)),
    deleteReview: (id) => dispatch(deleteReview(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
