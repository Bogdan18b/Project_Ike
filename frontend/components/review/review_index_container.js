import { connect } from 'react-redux';
import { requestAllReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = ({ entities }) => {
  return {
    reviews: Object.values(entities.reviews)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllReviews: () => dispatch(requestAllReviews())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
