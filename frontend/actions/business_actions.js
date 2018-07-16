import * as BusinessApiUtil from '../util/business_api_util';

export const FETCH_ALL_BUSINESSES = 'FETCH_ALL_BUSINESSES';
export const FETCH_BUSINESS = 'FETCH_BUSINESS';
export const FETCH_ALL_BUSINESS_TYPES = 'FETCH_ALL_BUSINESS_TYPES';

export const fetchAllBusinesses = (businesses) => {
  return {
    type: FETCH_ALL_BUSINESSES,
    businesses
  };
};
export const fetchBusiness = (payload) => {
  debugger
  return {
    type: FETCH_BUSINESS,
    payload
  };
};

export const fetchAllBusinessTypes = (types) => {
  return {
    type: FETCH_ALL_BUSINESS_TYPES,
    types
  };
};

export const requestAllBusinesses = () => {
  return dispatch => {
    BusinessApiUtil.fetchAllBusinesses().then(businesses => {
      return dispatch(fetchAllBusinesses(businesses));
    });
  };
};

export const requestBusiness = (id) => {
  debugger
  return dispatch => {
    BusinessApiUtil.fetchBusiness(id).then((payload) => {
      debugger
      return dispatch(fetchBusiness(payload));
    });
  };
};

export const requestAllBusinessTypes = () => {
  return dispatch => {
    BusinessApiUtil.fetchAllBusinessTypes().then(types => {
      return dispatch(fetchAllBusinessTypes(types));
    });
  };
};
