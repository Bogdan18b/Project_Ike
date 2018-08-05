import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, login } from '../../actions/session_actions';
import React from 'react';

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
