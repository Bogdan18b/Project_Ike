import React from 'react';
import  BusinessTypeIndexItem from './business_type_index_item';
import PropTypes from 'prop-types';

const BusinessType = ({ types, receiveTypeFromSearch }) => {
  let classType = (window.location.href.includes("businesses") ||
    window.location.href.includes("user_details")) ?
    "" : "-home";
  if (types === undefined) {
    return null;
  }
  const typ = types.map((type, idx) =>
    <BusinessTypeIndexItem key={type.id}
      receiveTypeFromSearch={receiveTypeFromSearch}
      type={type} y={idx}/>);
  return (
    <ul className={`ike-business-header-nav${classType}`}>
      {typ}
    </ul>
  )
}

BusinessType.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object),
  receiveTypeFromSearch: PropTypes.func
}

export default BusinessType;
