import React from 'react';
import { Link } from 'react-router-dom';
import BusinessIndexItem from './business_index_item';
import BusinessTypeContainer from './business_type_container';
import GreetingContainer from '../greeting/greeting_business_container';
import BusinessMap from '../map/map'
import SearchContainer from '../search/search_business_page_container';

class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllBusinesses();
    this.props.requestAllBusinessTypes();
  }

  render() {
    debugger
    if (this.props.businesses === undefined) {
      return <p>coming soon</p>;
    }
    const businesses = this.props.businesses.map(business =>
    <BusinessIndexItem key={business.id} business={business} />)
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
        <div className="ike-business-main-div">
          <ul>
            {businesses}
          </ul>

          <div className="ike-business-index-map">
            <BusinessMap businesses={Object.values(this.props.businesses)}/>
          </div>
        </div>

      </div>
    )
  }
}

export default BusinessIndex;
