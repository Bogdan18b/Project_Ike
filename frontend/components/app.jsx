import React from 'react';
import { Link, Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import { Footer } from './footer/footer';
import BusinessIndexContainer from './business/business_index_container';
import BusinessShowContainer from './business/business_show_container';
import BusinessTypeContainer from './business/business_type_container';
import ReviewIndexContainer from './review/review_index_container';

const App = () => (
  <div>
    <ReviewIndexContainer />
    <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
    <Route  exact path="/businesses" component={BusinessIndexContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Footer />
    <GreetingContainer />
  </div>
);

export default App;
