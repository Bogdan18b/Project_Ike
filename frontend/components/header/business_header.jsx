import React, { Fragment } from "react";
import GreetingContainer from "../greeting/greeting_container";
import { Link } from "react-router-dom";
import SearchContainer from "../search/search_container";
import BusinessTypeContainer from "../business/type/business_type_container";

const BusinessHeader = () => (
  <Fragment>
    <div className="Header--business">
      <Link to="/">
        <img
          className="Header--business-logo"
          src="https://s3.amazonaws.com/project-ike-seeding-dev/logo.png"
        />
      </Link>
      <SearchContainer />
      <GreetingContainer />
    </div>
    <BusinessTypeContainer />
  </Fragment>
);

export default BusinessHeader;
