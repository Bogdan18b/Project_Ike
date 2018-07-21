import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import BusinessIndexItem from './business_index_item';
import BusinessTypeContainer from './business_type_container';
import GreetingContainer from '../greeting/greeting_business_container';
import BusinessMap from '../map/map'
import SearchContainer from '../search/search_business_page_container';

class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllBusinesses();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.businesses !== newProps.match.params.businesses) {
      this.props.requestAllBusinesses();
    }
  }

  render() {
    if (Object.values(this.props.businesses).length === 0) {
      return <p></p>;
    }
    let businesses;

    if (Object.values(this.props.businessType).length === 0) {
      businesses = Object.values(this.props.businesses).map(business =>
        <BusinessIndexItem key={business.id} business={business} />)
    } else {
      let businessesOfType = this.props.businessType.businessIds.map(id => this.props.businesses[id]);
      businesses = businessesOfType.map(business => {
        if (business) {
          return <BusinessIndexItem key={business.id} business={business} />;
        }
      });
    }
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
