import React, { Fragment } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import BusinessIndexItem from './business_index_item';
import GreetingContainer from '../../greeting/greeting_container';
import BusinessMap from '../../map/map';
import BusinessHeader from '../../header/business_header';
import SearchContainer from '../../search/search_container';
import PropTypes from 'prop-types';

const BusinessIndex = ({ businesses }) => {
  let bus = businesses.map((business, idx) =>
    <BusinessIndexItem key={idx} idx={idx} business={business} />);
  return (
    <Fragment>
      <BusinessHeader />
      <div className="ike-business-main-div">
        <ul>
          {bus}
        </ul>

        <div className="ike-business-index-map">
          <BusinessMap businesses={businesses}/>
        </div>
      </div>
    </Fragment>
  )
}

BusinessIndex.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.object)
}

export default withRouter(BusinessIndex);
