import React from "react";
import BusinessTypeIndexItem from "./business_type_index_item";
import PropTypes from "prop-types";

const BusinessType = ({ types, receiveTypeFromSearch }) => {
  const classType = window.location.hash !== "#/" ? "business" : "";
  if (types === undefined) {
    return null;
  }
  const typ = types.map(type => (
    <BusinessTypeIndexItem
      key={type.id}
      receiveTypeFromSearch={receiveTypeFromSearch}
      type={type}
      classType={classType}
    />
  ));
  return <ul className={`Header-navbar Header-navbar--${classType}`}>{typ}</ul>;
};

BusinessType.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object),
  receiveTypeFromSearch: PropTypes.func
};

export default BusinessType;
