import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import { Footer } from './footer/footer';
const App = () => (
  <div>
    <Link id="ike-home-button"to="/">Home</Link>
    <GreetingContainer />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Footer />
  </div>
);

export default App;
