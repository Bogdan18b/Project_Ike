import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <h1>IKE! by Bogdan</h1>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
