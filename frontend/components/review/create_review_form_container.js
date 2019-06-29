import { connect } from "react-redux";
import CreateReviewForm from "./create_review_form";
import { createReview } from "../../actions/review_actions";

const mapStateToProps = (state, ownProps) => {
  const businessId = ownProps.match.params.businessId;
  const className = "fa fa-star grey-star";
  const review = { rating: "", body: "", businessId, className };
  const errors = state.errors.review;
  const formType = "Create Review";
  return { review, errors, formType };
};

const mapDispatchToProps = dispatch => ({
  action: review => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateReviewForm);
