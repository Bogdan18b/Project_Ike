import { connect } from 'react-redux';
import { requestAllReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = ({ entities }) => {
  let reviews = Object.values(entities.reviews);
  reviews.forEach(review => {
    review.userName = (entities.users[review.userId] && entities.users[review.userId].first_name) || "";
    review.businessName = (entities.businesses[review.businessId] && entities.businesses[review.businessId].name) || "";
  });
  return {
    reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllReviews: () => dispatch(requestAllReviews())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
