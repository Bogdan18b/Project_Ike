import { connect } from 'react-redux';
import CreateReviewForm from './create_review_form';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const businessId = ownProps.match.params.businessId;
  const className = "fa fa-star grey-star";
  const review = { rating: '', body: '', businessId, className};
  const errors = state.errors.review;
  return { review, errors };
  debugger
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: review => dispatch(createReview(review)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm);
