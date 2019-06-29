import * as BusinessApiUtil from "../util/business_api_util";

export const FETCH_ALL_BUSINESSES = "FETCH_ALL_BUSINESSES";
export const FETCH_BUSINESS = "FETCH_BUSINESS";
export const FETCH_ALL_BUSINESS_TYPES = "FETCH_ALL_BUSINESS_TYPES";

export const fetchAllBusinesses = businesses => ({
  type: FETCH_ALL_BUSINESSES,
  businesses
});
export const fetchBusiness = payload => ({
  type: FETCH_BUSINESS,
  payload
});

export const fetchAllBusinessTypes = types => ({
  type: FETCH_ALL_BUSINESS_TYPES,
  types
});

export const requestAllBusinesses = () => dispatch =>
  BusinessApiUtil.fetchAllBusinesses().then(businesses =>
    dispatch(fetchAllBusinesses(businesses))
  );

export const requestBusiness = id => dispatch =>
  BusinessApiUtil.fetchBusiness(id).then(payload =>
    dispatch(fetchBusiness(payload))
  );

export const requestAllBusinessTypes = () => dispatch =>
  BusinessApiUtil.fetchAllBusinessTypes().then(types =>
    dispatch(fetchAllBusinessTypes(types))
  );
