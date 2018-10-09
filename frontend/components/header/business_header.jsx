import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import BusinessTypeContainer from '../business/business_type_container';

const BusinessHeader = () => {
    return (
      <div>
        <div className="ike-business-show-header">
          <Link to="/"><img id="logo-pic-business-index" src="https://s3.amazonaws.com/project-ike-seeding-dev/logo.png"/></Link>
          <SearchContainer />
          <GreetingContainer />
        </div>
        <div className="ike-business-show-header-nav">
          <BusinessTypeContainer />
        </div>
      </div>
    );
};

export default BusinessHeader;
