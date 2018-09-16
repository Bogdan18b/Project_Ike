import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { requestAllReviews } from '../../actions/review_actions';

const mapStateToProps = ({ entities, session }) => {
  debugger
  let user = Object.values(entities.users).filter(user => user.id === session.id)[0];
  return {
    user: user,
    reviews: entities.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllReviews: () => dispatch(requestAllReviews())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
