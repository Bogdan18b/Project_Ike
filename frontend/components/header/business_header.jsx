import React, { Fragment } from "react";
import GreetingContainer from "../greeting/greeting_container";
import { Link } from "react-router-dom";
import SearchContainer from "../search/search_container";
import CategoryContainer from "../business/category/category_container";
import Logo from "../icons/logo";

const BusinessHeader = () => (
  <Fragment>
    <div className="Header--business">
      <Link to="/">
        <Logo viewBox="100 120 200 125" fill="#000000" />
      </Link>
      <SearchContainer />
      <GreetingContainer />
    </div>
    <CategoryContainer />
  </Fragment>
);

export default BusinessHeader;
