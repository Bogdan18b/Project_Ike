import { connect } from 'react-redux';
import CreateReviewForm from './create_review_form';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const businessId = ownProps.match.params.businessId;
  const review = { rating: '', body: '', businessId};
  return { review };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: review => dispatch(createReview(review)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm);
