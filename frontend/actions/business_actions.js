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
export const fetchBusiness = (business) => {
  return {
    type: FETCH_BUSINESS,
    business
  };
};

export const fetchAllBusinessTypes = (types) => {
  return {
    type: FETCH_ALL_BUSINESS_TYPES,
    types
  };
};

export const requestAllBusinesses = () => {
  debugger
  return dispatch => {
    debugger
    BusinessApiUtil.fetchAllBusinesses().then(businesses => {
      debugger
      return dispatch(fetchAllBusinesses(businesses));
    });
  };
};

export const requestBusiness = (id) => {
  return dispatch => {
    BusinessApiUtil.fetchBusiness(id).then(business => {
      return dispatch(fetchBusiness(business));
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