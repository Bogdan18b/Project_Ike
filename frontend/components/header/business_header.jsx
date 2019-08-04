import React, { Fragment } from "react";
import GreetingContainer from "../greeting/greeting_container";
import { Link } from "react-router-dom";
import SearchContainer from "../search/search_container";
import CategoryContainer from "../business/category/category_container";

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
    <CategoryContainer />
  </Fragment>
);

export default BusinessHeader;
