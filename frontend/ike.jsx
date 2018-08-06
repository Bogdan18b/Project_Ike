import  React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as BusinessApiUtil from './util/business_api_util';
import * as SearchApiUtil from './util/search_api_util';
import * as ReviewApiUtil from './util/review_api_util';
import {FETCH_BUSINESS,FETCH_ALL_BUSINESSES, FETCH_ALL_BUSINESS_TYPES, requestBusiness, requestAllBusinesses, requestAllBusinessTypes, fetchBusiness} from './actions/business_actions';
import { requestAllReviews, createReview, deleteReview } from './actions/review_actions';
import { receiveSearchResults} from './actions/search_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        id: window.currentUser.id
      },
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.searchBusinesses = SearchApiUtil.searchBusinesses;
  window.deleteReview = ReviewApiUtil.deleteReview;
  window.updateReview = ReviewApiUtil.updateReview;
  window.removeme = deleteReview;
  window.receiveSearchResults = receiveSearchResults;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);
});
