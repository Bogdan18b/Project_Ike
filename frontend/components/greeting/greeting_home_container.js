import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    loginClass: "ike-login-home-button",
    signupClass: "ike-signup-home-button",
    formClass: "ike-login-form-home"
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
