import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <h1>IKE! by Bogdan</h1>
    <GreetingContainer />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
