import React, { Fragment } from "react";
import PopularBusiness from "./business";
import PropTypes from "prop-types";

const PopularBusinesses = ({ businesses }) => (
  <Fragment>
    <h1 id="ike-popular-businesses">Hot and New Businesses</h1>
    <div className="ike-popular-businesses">
      {businesses.map(bus => (
        <PopularBusiness key={bus.id} business={bus} />
      ))}
    </div>
  </Fragment>
);

PopularBusinesses.propTypes = {
  businesses: PropTypes.array
};

PopularBusinesses.defaultProps = {
  businesses: []
};

export default PopularBusinesses;
