import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import BusinessIndexItem from "./business_index_item";
import BusinessMap from "../../map/map";
import BusinessHeader from "../../header/business_header";
import PropTypes from "prop-types";

const BusinessIndex = ({ businesses }) => {
  let bus = businesses.map((business, idx) => (
    <BusinessIndexItem key={idx} idx={idx} business={business} />
  ));
  return (
    <Fragment>
      <BusinessHeader />
      <div className="BusinessIndex">
        <ul>{bus}</ul>

        <div className="BusinessIndex-map">
          <BusinessMap businesses={businesses} />
        </div>
      </div>
    </Fragment>
  );
};

BusinessIndex.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.object)
};

export default withRouter(BusinessIndex);
