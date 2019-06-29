import { connect } from "react-redux";
import CreateReviewForm from "./create_review_form";
import { updateReview } from "../../actions/review_actions";

const mapStateToProps = (state, ownProps) => {
  const defaultReview = { title: "", body: "" };
  const review =
    state.entities.reviews[ownProps.match.params.reviewId] || defaultReview;
  review.className = "fa fa-star grey-star";
  const errors = state.errors.review;
  const formType = "Update Review";
  return { review, errors, formType };
};

const mapDispatchToProps = dispatch => ({
  action: review => dispatch(updateReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateReviewForm);
