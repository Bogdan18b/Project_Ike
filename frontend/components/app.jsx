import React from 'react';
import { Link, Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import { Footer } from './footer/footer';
import BusinessIndexContainer from './business/index/business_index_container';
import BusinessSearchIndexContainer from './business/business_search_index_container';
import BusinessShowContainer from './business/show/business_show_container';
import BusinessTypeContainer from './business/type/business_type_container';
import ReviewIndexContainer from './review/review_index_container';
import CreateReviewFormContainer from './review/create_review_form_container';
import EditReviewFormContainer from './review/edit_review_form_container';
import UserProfileContainer from './session/user_profile_container';
import Header from './header/header';

const App = () => (
  <div>
    <Route exact path="/" component={Header} />
    <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
    <Route exact path="/businesses" component={BusinessIndexContainer} />
    <Route exact path="/businesses/search" component={BusinessSearchIndexContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/businesses/:businessId/reviews/new" component={CreateReviewFormContainer} />
    <ProtectedRoute exact path="/businesses/:businessId/reviews/:reviewId/edit" component={EditReviewFormContainer} />
    <ProtectedRoute exact path="/user_details" component={UserProfileContainer} />
    <Route exact path="/" component={ReviewIndexContainer} />
    <Footer />
  </div>
);

export default App;
