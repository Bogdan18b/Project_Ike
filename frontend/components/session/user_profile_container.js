import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { requestAllReviews } from '../../actions/review_actions';

const mapStateToProps = ({ entities, session }) => {
  debugger
  return {
    user: Object.values(entities.users)[0],
    reviews: entities.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllReviews: () => dispatch(requestAllReviews())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
