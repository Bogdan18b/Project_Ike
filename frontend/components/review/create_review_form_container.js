import { connect } from 'react-redux';
import CreateReviewForm from './create_review_form';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  const review = { rating: '', body: '' };
  const businessId = ownProps.match.params.businessId;
  return { review, businessId };
};

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    createReview: review => dispatch(createReview(review)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm);
