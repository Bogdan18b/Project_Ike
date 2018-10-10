import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import BusinessIndexItem from './business_index_item';
import GreetingContainer from '../../greeting/greeting_container';
import BusinessMap from '../../map/map';
import BusinessHeader from '../../header/business_header';
import SearchContainer from '../../search/search_container';
import PropTypes from 'prop-types';

class BusinessIndex extends React.Component {

  render() {
    let businesses = this.props.businesses.map((business, idx) =>
      <BusinessIndexItem key={idx} idx={idx} business={business} />);
    return (
      <div>
        <BusinessHeader />
        <div className="ike-business-main-div">
          <ul>
            {businesses}
          </ul>

          <div className="ike-business-index-map">
            <BusinessMap businesses={this.props.businesses}/>
          </div>
        </div>

      </div>
    )
  }
}

BusinessIndex.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.object)
}

export default withRouter(BusinessIndex);
