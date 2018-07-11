import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <h1>IKE! by Bogdan</h1>
    <NavLink to="/login">Log In</NavLink>
    <NavLink to="/login">Sign Up</NavLink>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
